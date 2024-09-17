import Header from "./components/Header";
import CardPost from "./components/Posts/CardPost";
import CardPostImage from "./components/Posts/CardPostImage";
function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pb-10 dark:bg-gray-800">
      <Header />
      <main className="flex min-h-[calc(100vh-108px)] flex-col gap-5 pt-20 text-center max-sm:px-5">
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
        <CardPost />
        <CardPostImage />
      </main>
    </div>
  );
}

export default App;
