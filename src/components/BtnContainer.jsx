import { useGlobalContext } from "../context"

const BtnContainer = () => {
    const{uniqueCategory, filters} =  useGlobalContext()
  return (
    <div className="btn-container">
      {uniqueCategory.map((item, i) => (
        <button type="button" key={i} onClick={() =>filters(item)}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default BtnContainer