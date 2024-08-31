import Footer from "./sections/footer";
import Header from "./sections/header";
import Body from "./sections/body";

export default function App() {
  return (
    <div className="flex flex-col items-center gap-10 px-7 py-14">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
