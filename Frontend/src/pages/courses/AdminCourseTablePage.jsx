import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit } from "lucide-react";

import React from "react";
import { useNavigate } from "react-router";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const AdminCourseTablePage = () => {
    const navigate = useNavigate();
  return (
    <section>
      {/* Desktop table */}
      <div className="hidden sm:block rounded-xl border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Title</TableHead>
              <TableHead>Categroy</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.invoice}</TableCell>
                <TableCell>{data.paymentStatus}</TableCell>
                <TableCell>{data.paymentMethod}</TableCell>
                <TableCell>{data.totalAmount}</TableCell>
                <TableCell className="text-right">
                     <Button size='sm' variant='outline' className="text-[#100851]" onClick={() => navigate("course-details/1")}><Edit/></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {invoices.map((data, index) => (
          <div key={index} className="rounded-xl border p-4 bg-white">
            <div className="flex items-center justify-between mb-3 pb-3 border-b">
              <span className="font-medium text-sm">{data.invoice}</span>
              <span>{data.paymentStatus}</span>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Method</span>
                <span>{data.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">{data.totalAmount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminCourseTablePage