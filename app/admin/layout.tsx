export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <div className="min-h-screen flex flex-col">
                    <header className="bg-gray-800 text-white p-4">
                        <h1 className="text-lg font-bold">Admin Panel</h1>

                    </header>
                    <main className="flex-1 p-4">{children}</main>
                </div>

            </body>

        </html>
    );
}