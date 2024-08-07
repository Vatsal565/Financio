import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { PageWrapper } from "@/components/page-wrapper";

export default function Dashboard() {
	return (
		<div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
			<PageWrapper>
			<DataGrid />
			<DataCharts />
			</PageWrapper>
		</div>
	);
}