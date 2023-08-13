import './btn-home-section.css';

const BtnHomeSection = ({ text,width }) => {
  return (
    <button id="BtnHomeSection" className={width }>
          {text}
      </button>
  )
}

export default BtnHomeSection