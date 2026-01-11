import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Composition from "@/components/Composition";
import Usage from "@/components/Usage";
import Purchase from "@/components/Purchase";
import Gymnastics from "@/components/Gymnastics";
import Articles from "@/components/Articles";
import SourceInfo from "@/components/SourceInfo";
import Warning from "@/components/Warning";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav />
      <Navbar />
      <Intro />
      <Features />
      <Composition />
      <Usage />
      <Purchase />
      <Gymnastics />
      <Articles />
      <SourceInfo />
      <Warning />
      <Footer />
    </main>
  );
}
