import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Quest",
  keywords: "rental , property, real estate",
  description: "Find the Perfet rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
