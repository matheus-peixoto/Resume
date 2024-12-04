import { FaFilePdf } from "react-icons/fa6";

export function StickyFooter() {
    const openPrintDialog = () => {
        window.print();
    };

    return (
        <div className="fixed flex justify-center align-middle bottom-0 left-0 right-0 border-t bg-white p-1 py-1.5 text-sm print:hidden ">
            <button className="inline-flex justify-center align-middle text-red-400 text-center rounded-md border border-gray-200 p-1 hover:text-red-500" onClick={openPrintDialog}>
                <FaFilePdf size={24} />
            </button>
        </div>
    );
}