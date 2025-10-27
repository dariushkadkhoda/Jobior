import Container from "../components/Container";

function Home() {
  return (
    <>
    {/* hero */}
    <section className="bg-yellow-300"><Container>hero</Container></section>
    {/* Jobs */}
    <section className="bg-pink-500"><Container>Jobs</Container></section>
    {/* banner */}
    <section className="bg-STints-300">banner</section>
    {/* Top Companies  */}
    <section className="bg-indigo-500">Companies</section>
    {/* Get The App */}
    <section className="bg-lime-700">App</section>
    {/*  */}
    </>
  )
}

export default Home