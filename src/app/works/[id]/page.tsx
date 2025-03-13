import CardDetail from "../components/CardDetail/CardDetail";
import swagData, { Work } from "../../data";
import { useRouter } from "next/navigation";

export default async function WorkPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;

  const {
    id
  } = params;

  // データ全体から、idがURLと一致するデータを返す
  const data: Work = swagData.find((p) => p.id === id)!;

  return (
    <div className="w-8/12 container mx-auto my-10">
      <CardDetail data={data} />
    </div>
  );
}
