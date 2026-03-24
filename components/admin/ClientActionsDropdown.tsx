"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings2Icon } from "lucide-react";
import EditDetails from "./EditDetails";
import CreateTransaction from "./CreateTransaction";
import CreateChartData from "./CreateChartData";
import CreateDepositAdmin from "./CreateDepositAdmin";
import CreateWithdrawalAdmin from "./CreateWithdrawalAdmin";

export default function ClientActionsDropdown({ user }: { user: any }) {
  return (
    <>
      {/* Desktop View: Show buttons sequentially */}
      <div className="hidden xl:flex flex-wrap items-center gap-3">
        <EditDetails user={user} />
        <CreateTransaction user={user} />
        <CreateChartData user={user} />
        <CreateDepositAdmin user={user} />
        <CreateWithdrawalAdmin user={user} />
      </div>

      {/* Mobile/Tablet View: Grouped into a drop-down */}
      <div className="flex xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Settings2Icon className="h-4 w-4" />
              Manage Options
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Client Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <EditDetails user={user} asDropdownItem={true} />
            <CreateTransaction user={user} asDropdownItem={true} />
            <CreateChartData user={user} asDropdownItem={true} />
            <CreateDepositAdmin user={user} asDropdownItem={true} />
            <CreateWithdrawalAdmin user={user} asDropdownItem={true} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
