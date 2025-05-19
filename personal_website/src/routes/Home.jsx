import Header from "../components/Header";
import "../Style.css";
export default function Home() {
  return (
    <>
    <Header />
      <div className="homecontainer">
        <h1 className="hometitle">Hi, I'm Jackson Le</h1>
        <p className="subtitlehome">
            Computer Science student at UVA passionate about building smart and scalable tech.
        </p>
        <p className="subtitlehome">Browse around to learn more about background, projects, and interests.</p>
      </div>
    </>
  );
}