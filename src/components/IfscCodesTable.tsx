'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface Branch {
  ifsc: string;
  branchName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

const branches: Branch[] = [
  {
    ifsc: 'MNSB0000001',
    branchName: 'Head Office',
    address: '123 Banking Street, Main Market',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    phone: '022-12345678'
  },
  {
    ifsc: 'MNSB0000002',
    branchName: 'Andheri',
    address: '456 Linking Road, Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400053',
    phone: '022-23456789'
  },
  {
    ifsc: 'MNSB0000003',
    branchName: 'Bandra',
    address: '789 Bandra West, Bandra',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    phone: '022-34567890'
  },
  {
    ifsc: 'MNSB0000004',
    branchName: 'Dadar',
    address: '321 Dadar East, Dadar',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400014',
    phone: '022-45678901'
  },
  {
    ifsc: 'MNSB0000005',
    branchName: 'Worli',
    address: '654 Worli Sea Face, Worli',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400018',
    phone: '022-56789012'
  },
  {
    ifsc: 'MNSB0000006',
    branchName: 'Delhi Main',
    address: '789 Connaught Place, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-12345678'
  },
  {
    ifsc: 'MNSB0000007',
    branchName: 'South Delhi',
    address: '456 Hauz Khas, South Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110016',
    phone: '011-23456789'
  },
  {
    ifsc: 'MNSB0000008',
    branchName: 'East Delhi',
    address: '123 Laxmi Nagar, East Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110092',
    phone: '011-34567890'
  },
  {
    ifsc: 'MNSB0000009',
    branchName: 'West Delhi',
    address: '654 Rajouri Garden, West Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110027',
    phone: '011-45678901'
  },
  {
    ifsc: 'MNSB0000010',
    branchName: 'North Delhi',
    address: '987 Kamla Nagar, North Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110007',
    phone: '011-56789012'
  },
  {
    ifsc: 'MNSB0000011',
    branchName: 'Bangalore Main',
    address: '123 MG Road, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    phone: '080-12345678'
  },
  {
    ifsc: 'MNSB0000012',
    branchName: 'Indiranagar',
    address: '456 100 Feet Road, Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560008',
    phone: '080-23456789'
  },
  {
    ifsc: 'MNSB0000013',
    branchName: 'Jayanagar',
    address: '789 Jayanagar 4th Block, Jayanagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560041',
    phone: '080-34567890'
  },
  {
    ifsc: 'MNSB0000014',
    branchName: 'Whitefield',
    address: '321 Whitefield Main Road, Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560066',
    phone: '080-45678901'
  },
  {
    ifsc: 'MNSB0000015',
    branchName: 'Electronic City',
    address: '654 Hosur Road, Electronic City',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560100',
    phone: '080-56789012'
  },
  {
    ifsc: 'MNSB0000016',
    branchName: 'Chennai Main',
    address: '789 Anna Salai, Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600002',
    phone: '044-12345678'
  },
  {
    ifsc: 'MNSB0000017',
    branchName: 'T Nagar',
    address: '456 T Nagar, Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600017',
    phone: '044-23456789'
  },
  {
    ifsc: 'MNSB0000018',
    branchName: 'Adyar',
    address: '123 Adyar, Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600020',
    phone: '044-34567890'
  },
  {
    ifsc: 'MNSB0000019',
    branchName: 'Mylapore',
    address: '654 Mylapore, Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600004',
    phone: '044-45678901'
  },
  {
    ifsc: 'MNSB0000020',
    branchName: 'Velachery',
    address: '987 Velachery, Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600042',
    phone: '044-56789012'
  }
];

export default function IfscCodesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [copiedIfsc, setCopiedIfsc] = useState('');

  const filteredBranches = useMemo(() => {
    let filtered = branches;

    if (selectedState !== 'all') {
      filtered = filtered.filter(branch => branch.state === selectedState);
    }

    if (searchTerm) {
      filtered = filtered.filter(branch =>
        branch.ifsc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        branch.branchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        branch.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedState]);

  const states = useMemo(() => {
    const stateList = ['all', ...Array.from(new Set(branches.map(branch => branch.state)))];
    return stateList;
  }, []);

  const copyToClipboard = (ifsc: string) => {
    navigator.clipboard.writeText(ifsc);
    setCopiedIfsc(ifsc);
    setTimeout(() => setCopiedIfsc(''), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-text-primary">
          IFSC Codes List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 font-semibold text-text-primary">IFSC Code</th>
                <th className="text-left py-3 px-4 font-semibold text-text-primary">Branch Name</th>
                <th className="text-left py-3 px-4 font-semibold text-text-primary">Address</th>
                <th className="text-left py-3 px-4 font-semibold text-text-primary">City</th>
                <th className="text-left py-3 px-4 font-semibold text-text-primary">State</th>
                <th className="text-left py-3 px-4 font-semibold text-text-primary">Pincode</th>
                <th className="text-left py-3 px-4 font-semibold text-text-primary">Phone</th>
                <th className="text-center py-3 px-4 font-semibold text-text-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBranches.map((branch, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className="font-mono text-sm font-semibold text-brand-primary">
                      {branch.ifsc}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium text-text-primary">{branch.branchName}</td>
                  <td className="py-3 px-4 text-sm text-text-secondary">{branch.address}</td>
                  <td className="py-3 px-4 text-text-secondary">{branch.city}</td>
                  <td className="py-3 px-4 text-text-secondary">{branch.state}</td>
                  <td className="py-3 px-4 text-text-secondary">{branch.pincode}</td>
                  <td className="py-3 px-4 text-text-secondary">{branch.phone}</td>
                  <td className="py-3 px-4 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(branch.ifsc)}
                      className="text-xs"
                    >
                      {copiedIfsc === branch.ifsc ? 'Copied!' : 'Copy'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
