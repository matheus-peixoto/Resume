export function Languages() {
    return (
        <header className="border-b flex gap-2 p-1 justify-end print:hidden px-4">
            <a className=" text-gray-500 text-center rounded-md border border-gray-200 px-1 p-y-0.5 hover:text-gray-600" href="/en">English</a>
            <a className=" text-gray-500 text-center rounded-md border border-gray-200 px-1 p-y-0.5 hover:text-gray-600" href="/pt-br">Português</a>
        </header>
    );
}