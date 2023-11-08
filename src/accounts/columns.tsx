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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export const columns: ColumnDef<Account>[] = [
  {
    id: "Select",
    header: ({ table }) => {
      return (
        <div className="w-auto h-auto justify-items-center">
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value);
            }}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },

    enableSorting: false,
  },

  {
    header: ({ column }) => {
      return (
        <Button
          className="-px-1 font-normal tracking-widest uppercase"
          variant="covert"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          [service <ArrowDownUp className="ml-2 h-4 w-4" />]
        </Button>
      );
    },

    accessorKey: "service",
  },

  {
    header: ({}) => {
      return (
        <>
          <div className="font-normal tracking-widest uppercase">
            <h1>[email]</h1>
          </div>
        </>
      );
    },

    accessorKey: "email",

    cell: ({ row }) => {
      const { toast } = useToast();

      const account = row.original;

      const accountEmail = account.email;
      const email = row.getValue("email");

      return (
        <>
          <div className="-translate-x-4">
            <Button
              className="font-normal"
              variant="covert"
              onClick={() => {
                navigator.clipboard.writeText(accountEmail.toString());
                toast({
                  title: "Testing",
                  description: "Testing",
                });
              }}
            >
              {email as string}
            </Button>
          </div>
        </>
      );
    },
  },

  {
    header: ({}) => {
      return (
        <>
          <div className="font-normal tracking-widest uppercase">
            <h1>[username]</h1>
          </div>
        </>
      );
    },

    accessorKey: "username",

    cell: ({ row }) => {
      const account = row.original;

      const accountUser = account.username;
      const username = row.getValue("username");

      return (
        <>
          <div className="-translate-x-4">
            <Button
              className="font-normal tracking-wide"
              variant="covert"
              onClick={() =>
                navigator.clipboard.writeText(accountUser.toString())
              }
            >
              {username as string}
            </Button>
          </div>
        </>
      );
    },
  },

  {
    header: ({}) => {
      return (
        <>
          <div className="font-normal tracking-widest uppercase">
            <h1>[password]</h1>
          </div>
        </>
      );
    },

    accessorKey: "password",

    cell: ({ row }) => {
      const account = row.original;

      const accountPass = account.password;
      {
        /*const password = row.getValue("password");*/
      }

      return (
        <>
          <div className="-translate-x-4">
            <Button
              className="font-thin tracking-widest"
              variant="covert"
              onClick={() =>
                navigator.clipboard.writeText(accountPass.toString())
              }
            >
              ********
            </Button>
          </div>
        </>
      );
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      const account = row.original;

      const accountEmail = account.email;
      const accountPass = account.password;
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
            <DropdownMenuItem onClick={() => console.log("Work in progress")}>
              Edit account info
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(accountEmail.toString())
              }
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(accountUser.toString())
              }
            >
              Copy Username
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(accountPass.toString())
              }
            >
              Copy Password
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
