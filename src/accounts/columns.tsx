"use client";

import { Account } from "@/accounts";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ArrowDownUp } from "lucide-react";

export const columns: ColumnDef<Account>[] = [
  {
    header: ({ column }) => {
      return (
        <Button
          className="-ml-2"
          variant="outline"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          App / Site <ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "service",
  },

  {
    header: "Email",
    accessorKey: "email",
  },

  {
    header: "Username",
    accessorKey: "username",
  },

  {
    header: "Password",
    accessorKey: "password",
    cell: ({ row }) => {
      const password = row.getValue("password");
      return (
        <>
          <div className="font-thin">
            <text type="password">{password as string}</text>
          </div>
        </>
      );
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      const account = row.original;
      const accountUser = account.username;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(accountUser.toString())
              }
            >
              Copy Username
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
