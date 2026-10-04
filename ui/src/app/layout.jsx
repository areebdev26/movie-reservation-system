import "./global.css";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

export const metadata = {
    title: "Book My Screen",
    description: "Movie reservation system",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1 px-4 py-6">
                {children}
            </main>

            <Footer />
        </div>
        </body>
        </html>
    );
}