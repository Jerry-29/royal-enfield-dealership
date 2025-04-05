"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { formatDate } from "@/lib/date";
import { Partnership } from "@/util/types";
import { Eye, Mail, Building, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

export default function PartnershipsTable() {
  const [partnerships, setPartnerships] = useState<Partnership[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPartnership, setSelectedPartnership] =
    useState<Partnership | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [total, setTotal] = useState(0);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const user = process.env.ADMIN_USERNAME || "";
  // const pwd = process.env.ADMIN_PASSWORD || "";

  const fetchPartnerships = useCallback(async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        search: searchQuery,
        type: filterType,
      });

      const response = await fetch(`/api/get-data?${queryParams}`);

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Try to parse JSON
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        throw new Error("Failed to parse response");
      }

      // Validate response structure
      if (!data || typeof data.success !== "boolean") {
        throw new Error("Invalid response format");
      }

      if (data.success) {
        setPartnerships(Array.isArray(data.data) ? data.data : []);
        setTotal(typeof data.total === "number" ? data.total : 0);
        setTotalPages(Math.ceil((data.total || 0) / itemsPerPage));
      } else {
        throw new Error(data.message || "Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching partnerships:", error);
      setPartnerships([]);
      setTotal(0);
      setTotalPages(1);
      // You might want to show an error toast here
    } finally {
      setLoading(false);
    }
  }, [currentPage, itemsPerPage, searchQuery, filterType]);

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/mark-as-read/${id}`, { method: "PUT" });
      fetchPartnerships();
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const getPartnershipTypeColor = (type: string) => {
    switch (type) {
      case "dealership":
        return "bg-blue-100 text-blue-800";
      case "distribution":
        return "bg-green-100 text-green-800";
      case "studio":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setFilterType(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchPartnerships();
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [currentPage, itemsPerPage, searchQuery, filterType, fetchPartnerships]);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     const username = window.prompt("Enter username:");
  //     const password = window.prompt("Enter password:");

  //     if (username == user && password == pwd) {
  //       setIsAuthenticated(true);
  //     } else {
  //       window.alert("Invalid credentials!");
  //       window.location.href = "/"; // Redirect to home page
  //     }
  //   }
  // }, [isAuthenticated, pwd, user]);

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Partnership Inquiries</h2>
          <p className="text-sm text-gray-500 mt-1">
            Showing {partnerships.length} of {total} inquiries
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search partnerships..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-64"
            />
          </div>
          <Select value={filterType} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="dealership">Dealership</SelectItem>
              <SelectItem value="distribution">Distribution</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
          <Badge variant="outline">
            {partnerships.filter((p) => !p.isRead).length} New
          </Badge>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center p-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Business Info</TableHead>
                  <TableHead>Contact Details</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-12">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnerships.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      No partnerships found
                    </TableCell>
                  </TableRow>
                ) : (
                  partnerships.map((partnership) => (
                    <TableRow
                      key={partnership._id}
                      className={
                        partnership.isRead ? "" : "font-medium bg-slate-50"
                      }
                    >
                      <TableCell>
                        {!partnership.isRead && (
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">
                            {partnership.firstName} {partnership.lastName}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {partnership.companyName}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{partnership.email}</div>
                          <div className="text-sm text-gray-500">
                            {partnership.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={getPartnershipTypeColor(
                            partnership.partnershipType
                          )}
                        >
                          {partnership.partnershipType}
                        </Badge>
                      </TableCell>
                      <TableCell>{partnership.location}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm" suppressHydrationWarning>
                            {formatDate(partnership.submittedAt).display}
                          </div>
                          <div
                            className="text-xs text-gray-500"
                            suppressHydrationWarning
                          >
                            {formatDate(partnership.submittedAt).relative}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => setSelectedPartnership(partnership)}
                          className="text-slate-400 hover:text-slate-600"
                        >
                          {partnership.isRead ? <Mail /> : <Eye />}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Select
              value={itemsPerPage.toString()}
              onValueChange={handleItemsPerPageChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Items per page" />
              </SelectTrigger>
              <SelectContent>
                {ITEMS_PER_PAGE_OPTIONS.map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    Show {size} items
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant="secondary"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </Button>
                </PaginationItem>

                {currentPage > 2 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                )}

                {currentPage > 3 && <PaginationEllipsis />}

                {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                  const page = Math.min(
                    Math.max(currentPage - 1 + i, 1),
                    totalPages
                  );
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={true}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                {currentPage < totalPages - 2 && <PaginationEllipsis />}

                {currentPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <Button
                    variant="secondary"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}

      <Dialog
        open={!!selectedPartnership}
        onOpenChange={() => setSelectedPartnership(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Partnership Inquiry Details</DialogTitle>
            <DialogDescription>
              View detailed information about this partnership inquiry
            </DialogDescription>
          </DialogHeader>
          {selectedPartnership && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-gray-500">
                    Business Information
                  </h4>
                  <div>
                    <div className="text-sm text-gray-500">Company Name</div>
                    <div className="font-medium">
                      {selectedPartnership.companyName}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      Partnership Type
                    </div>
                    <Badge
                      className={getPartnershipTypeColor(
                        selectedPartnership.partnershipType
                      )}
                    >
                      {selectedPartnership.partnershipType}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div>{selectedPartnership.location}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm text-gray-500">
                    Contact Information
                  </h4>
                  <div>
                    <div className="text-sm text-gray-500">Name</div>
                    <div className="font-medium">
                      {selectedPartnership.firstName}{" "}
                      {selectedPartnership.lastName}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div>{selectedPartnership.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div>{selectedPartnership.phone}</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-500 mb-2">
                  Additional Information
                </h4>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {selectedPartnership.message}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      selectedPartnership.isRead ? "bg-gray-300" : "bg-blue-600"
                    }`}
                  />
                  <span className="text-sm text-gray-500">
                    {selectedPartnership.isRead ? "Read" : "Unread"}
                  </span>
                </div>
              </div>
              {!selectedPartnership.isRead && (
                <Button
                  onClick={() => {
                    markAsRead(selectedPartnership._id);
                    setSelectedPartnership(null);
                  }}
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Mark as Read
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
