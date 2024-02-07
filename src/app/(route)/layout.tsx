import ClientOnly from "@/components/ClientOnly";
import Loading from "@/components/Loading";
import AppHeader from "@/components/app-header/AppHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <Loading />
      <div className="min-h-screen">
        <div className="sticky top-0">
          <AppHeader />
        </div>
        {children}
      </div>
    </ClientOnly>
  );
}
