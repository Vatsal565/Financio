"use client";

import { Loader2, Plus } from "lucide-react";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useBulkDeleteAccounts } from "@/features/accounts/api/use-bulk-delete-accounts";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./colomns";
import { Skeleton } from "@/components/ui/skeleton";
import { PageWrapper } from "@/components/page-wrapper";

const AccountsPage = () => {
	const newAccout = useNewAccount();
	const deleteAccounts = useBulkDeleteAccounts();
	const accountsQuery = useGetAccounts();
	const accounts = accountsQuery.data || [];

	const isDisabled = accountsQuery.isLoading || deleteAccounts.isPending;

	if (accountsQuery.isLoading) {
		return (
			<div>
				<div className="max-screen-2xl mx-auto w-full pb-10 -mt-24">
					<Card className="border-none drop-shadow-sm">
						<CardHeader>
							<Skeleton className="h-8 w-48" />
						</CardHeader>
						<CardContent>
							<div className="h-[500px] w-full flex items-center justify-center">
								<Loader2 className="size-6 text-slate-300 animate-spin" />
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}

	return (
		<div className="max-screen-2xl mx-auto w-full pb-10 -mt-24">
			<Card className="border-none shadow1">
				<PageWrapper>
					<CardHeader className="gap-y-2 items-center md:flex-row md:items-center md:justify-between md:mb-0 mb-5">
						<CardTitle className="text-xl line-clamp-1">
							Accounts page
						</CardTitle>

						<div className="mt-11 relative">
							<button onClick={newAccout.onOpen} className="p-[3px] relative">
								<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
								<div className="flex px-4 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
									<Plus className="size-6 mr-2" />
									Add New
								</div>
							</button>
							{/* <Button onClick={newAccout.onOpen} className="dark:text-[#0c1ca9] tracking-[1.5px]">
              <Plus className="size-4 mr-2" />
              Add New
            </Button> */}
						</div>
					</CardHeader>
					<CardContent>
						<DataTable
							columns={columns}
							data={accounts}
							filterKey="name"
							onDelete={row => {
								const ids = row.map(r => r.original.id);
								deleteAccounts.mutate({ ids });
							}}
							disabled={isDisabled}
						/>
					</CardContent>
				</PageWrapper>
			</Card>
		</div>
	);
};

export default AccountsPage;
