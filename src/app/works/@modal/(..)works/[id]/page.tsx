import CardDetail from "../../../components/CardDetail/CardDetail";
import Modal from "../../../components/Modal/Modal";
import swagData, { Work } from "../../../../data";

export default async function PhotoModal(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;

  const {
    id
  } = params;

  const data: Work = swagData.find((p) => p.id === id)!;

  return (
    <Modal>
      <CardDetail data={data} />
    </Modal>
  );
}
