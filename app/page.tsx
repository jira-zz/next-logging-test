import getData from "@/lib/mod"

export default function Home() {

const data = getData();

  return (
  <div> Home: {data.key} </div>
  );
}
