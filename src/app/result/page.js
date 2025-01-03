'use client'

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Actions from "@/components/Actions/actions";
import { Badge } from "@/components/ui/badge"
import { IoSearchSharp } from "react-icons/io5";
const invoices = [
  {
    nguyenVong: "000001",
    nganh: "Thợ điện",
    tenThiSinh: "Quách Thiếu Khang",
    cccd: "0123455678",
    trangThai: "pass"
  },
  {
    nguyenVong: "000002",
    nganh: "Nuôi cá",
    tenThiSinh: "Nguyễn Dương Trọng Tín",
    cccd: "0987654321",
    trangThai: "pass"
  },
  {
    nguyenVong: "000003",
    nganh: "Quản lý nuôi tôm",
    tenThiSinh: "Phạm Anh Ngữ",
    cccd: "0123455678",
    trangThai: "pass"
  },
  {
    nguyenVong: "000004",
    nganh: "Quản lý đất đai",
    tenThiSinh: "Nguyễn Khánh Duy",
    cccd: "0123455678",
    trangThai: "fail"
  },
  {
    nguyenVong: "000001",
    nganh: "Thợ điện",
    tenThiSinh: "Quách Thiếu Khang",
    cccd: "0123455678",
    trangThai: "pass"
  },
  {
    nguyenVong: "000002",
    nganh: "Nuôi cá",
    tenThiSinh: "Nguyễn Dương Trọng Tín",
    cccd: "0987654321",
    trangThai: "pass"
  },
  {
    nguyenVong: "000003",
    nganh: "Quản lý nuôi tôm",
    tenThiSinh: "Phạm Anh Ngữ",
    cccd: "0123455678",
    trangThai: "pass"
  },
  {
    nguyenVong: "000004",
    nganh: "Quản lý đất đai",
    tenThiSinh: "Nguyễn Khánh Duy",
    cccd: "0123455678",
    trangThai: "fail"
  }
]

function Result() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        marginBottom: "30px",
        marginTop: "10px"
      }}>
        <Button style={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "4px",
        }}>Thêm</Button>

        <div>
          <Input placeholder="Tìm kiếm tên ngành..." style={{
            width: "300px",
            marginLeft: "10px"
          }} />
        </div>

      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mã nguyện vọng</TableHead>
            <TableHead>Ngành</TableHead>
            <TableHead>Họ tên</TableHead>
            <TableHead>CCCD</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.nguyenVong}</TableCell>
              <TableCell>{item.nganh}</TableCell>
              <TableCell>{item.tenThiSinh}</TableCell>
              <TableCell>{item.cccd}</TableCell>
              <TableCell>{item.trangThai === "pass" ? (
                <Badge style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "4px",
                }}>Đậu</Badge>
              ) : (
                <Badge style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "4px",
                }}>Trượt</Badge>
              )}</TableCell>
              <TableCell>
                <Actions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Result;