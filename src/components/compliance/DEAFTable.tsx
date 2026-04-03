'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { DEAFRecord } from '@/lib/validations/deaf';

interface DEAFTableProps {
  className?: string;
  adminMode?: boolean;
  pageSize?: number;
}

export function DEAFTable({ 
  className, 
  adminMode = false, 
  pageSize = 10 
}: DEAFTableProps) {
  const { t } = useTranslation('compliance');
  const [records, setRecords] = useState<DEAFRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<DEAFRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [sortBy, setSortBy] = useState<keyof DEAFRecord>('sno');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Load DEAF records
  useEffect(() => {
    loadDEAFRecords();
  }, []);

  // Filter records based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredRecords(records);
    } else {
      const filtered = records.filter(record =>
        Object.values(record).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredRecords(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, records]);

  const loadDEAFRecords = async () => {
    try {
      setLoading(true);
      // In production, this would fetch from API
      // For now, load from local data file
      const response = await fetch('/api/deaf-records');
      if (response.ok) {
        const data = await response.json();
        setRecords(data);
        setTotalRecords(data.length);
      } else {
        // Fallback to sample data
        const sampleData: DEAFRecord[] = [
          {
            sno: 1,
            customerId: 'CUS001',
            glCode: '410101',
            newAccountNumber: 'SB001234',
            deafAccountNumber: 'DEAF001',
            accountName: 'RAJESH KUMAR',
            address: '123 MAIN STREET BHOAPL',
            state: 'MADHYA PRADESH',
            district: 'BHOPAL',
            transactionDate: '2023-03-15',
            deafAmount: 2500.50,
          },
          {
            sno: 2,
            customerId: 'CUS002',
            glCode: '410101',
            newAccountNumber: 'SB005678',
            deafAccountNumber: 'DEAF002',
            accountName: 'SMT. ANITA DEVI',
            address: '45 COLONY AREA',
            state: 'MADHYA PRADESH',
            district: 'BHOPAL',
            transactionDate: '2023-03-15',
            deafAmount: 1800.75,
          },
          {
            sno: 3,
            customerId: 'CUS003',
            glCode: '410102',
            newAccountNumber: 'CA009012',
            deafAccountNumber: 'DEAF003',
            accountName: 'MAHESH SHARMA',
            address: '789 NAGAR',
            state: 'MADHYA PRADESH',
            district: 'BHOPAL',
            transactionDate: '2023-03-15',
            deafAmount: 5200.00,
          },
        ];
        setRecords(sampleData);
        setTotalRecords(sampleData.length);
      }
    } catch (error) {
      console.error('Failed to load DEAF records:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (column: keyof DEAFRecord) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedRecords = [...filteredRecords].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const totalPages = Math.ceil(sortedRecords.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedRecords = sortedRecords.slice(startIndex, startIndex + pageSize);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  const exportToCSV = () => {
    const headers = [
      'S.No.', 'Customer ID', 'GL Code', 'New AC Number', 'DEAF New AC No.',
      'Account Name', 'Address', 'State', 'District', 'Transaction Date', 'DEAF Amount'
    ];
    
    const csvContent = [
      headers.join(','),
      ...sortedRecords.map(record => [
        record.sno,
        record.customerId,
        record.glCode,
        record.newAccountNumber,
        record.deafAccountNumber,
        record.accountName,
        record.address,
        record.state,
        record.district,
        record.transactionDate,
        record.deafAmount
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deaf-records-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className={cn('flex justify-center py-8', className)}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Search and Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-text-primary">
              {t('deaf.table.title', 'DEAF Records')}
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-secondary">
                {t('deaf.table.totalRecords', 'Total Records')}: {totalRecords}
              </span>
              {adminMode && (
                <Button variant="outline" size="sm" onClick={exportToCSV}>
                  {t('deaf.table.export', 'Export CSV')}
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder={t('deaf.table.searchPlaceholder', 'Search by name, account number, or address...') as string}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              {t('deaf.table.clear', 'Clear')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      {searchTerm && (
        <div className="text-sm text-text-secondary">
          {t('deaf.table.results', 'Results')}: {filteredRecords.length} {t('deaf.table.of', 'of')} {totalRecords}
        </div>
      )}

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th
                    className="text-left py-3 px-4 font-medium text-text-primary cursor-pointer hover:bg-surface/50"
                    onClick={() => handleSort('sno')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{t('deaf.table.sno', 'S.No.')}</span>
                      {sortBy === 'sno' && (
                        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th
                    className="text-left py-3 px-4 font-medium text-text-primary cursor-pointer hover:bg-surface/50"
                    onClick={() => handleSort('accountName')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{t('deaf.table.accountName', 'Account Name')}</span>
                      {sortBy === 'accountName' && (
                        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th
                    className="text-left py-3 px-4 font-medium text-text-primary cursor-pointer hover:bg-surface/50"
                    onClick={() => handleSort('newAccountNumber')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{t('deaf.table.accountNumber', 'Account Number')}</span>
                      {sortBy === 'newAccountNumber' && (
                        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th
                    className="text-left py-3 px-4 font-medium text-text-primary cursor-pointer hover:bg-surface/50"
                    onClick={() => handleSort('address')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{t('deaf.table.address', 'Address')}</span>
                      {sortBy === 'address' && (
                        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th
                    className="text-left py-3 px-4 font-medium text-text-primary cursor-pointer hover:bg-surface/50"
                    onClick={() => handleSort('transactionDate')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{t('deaf.table.transactionDate', 'Transaction Date')}</span>
                      {sortBy === 'transactionDate' && (
                        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th
                    className="text-right py-3 px-4 font-medium text-text-primary cursor-pointer hover:bg-surface/50"
                    onClick={() => handleSort('deafAmount')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>{t('deaf.table.amount', 'DEAF Amount')}</span>
                      {sortBy === 'deafAmount' && (
                        <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedRecords.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-text-secondary">
                      {searchTerm 
                        ? t('deaf.table.noResults', 'No records found matching your search.')
                        : t('deaf.table.noRecords', 'No DEAF records available.')
                      }
                    </td>
                  </tr>
                ) : (
                  paginatedRecords.map((record) => (
                    <tr key={record.sno} className="border-b border-border hover:bg-surface/30">
                      <td className="py-3 px-4 text-sm text-text-primary">{record.sno}</td>
                      <td className="py-3 px-4 text-sm text-text-primary font-medium">
                        {record.accountName}
                      </td>
                      <td className="py-3 px-4 text-sm text-text-primary">
                        {record.newAccountNumber}
                      </td>
                      <td className="py-3 px-4 text-sm text-text-secondary max-w-xs truncate">
                        {record.address}
                      </td>
                      <td className="py-3 px-4 text-sm text-text-primary">
                        {formatDate(record.transactionDate)}
                      </td>
                      <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">
                        {formatCurrency(record.deafAmount)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card>
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-text-secondary">
                {t('deaf.table.showing', 'Showing')} {startIndex + 1} to{' '}
                {Math.min(startIndex + pageSize, sortedRecords.length)} {t('deaf.table.of', 'of')}{' '}
                {sortedRecords.length} {t('deaf.table.entries', 'entries')}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  {t('deaf.table.previous', 'Previous')}
                </Button>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="w-8 h-8 p-0"
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                  {totalPages > 5 && (
                    <>
                      <span className="text-text-secondary">...</span>
                      <Button
                        variant={currentPage === totalPages ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                        className="w-8 h-8 p-0"
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  {t('deaf.table.next', 'Next')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
