import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

type Props = {
  onUpload: (data: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (

        <div className="relative">
          <button {...getRootProps()} className="p-[3px] relative">
								<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
								<div className="flex px-4 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
									<Upload className="size-6 mr-2" />
									Import
								</div>
							</button>
            {/* <Button {...getRootProps()} className="dark:text-[#0c1ca9] tracking-[1.5px]">
            <Upload className="mr-2 size-4" />
              Import
            </Button> */}
          </div>
      )}
    </CSVReader>
  );
};
