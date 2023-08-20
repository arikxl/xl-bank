import './btn-side-bar.css';

const BtnSideBar = ({ isSideBarShow }) => {
    return (
        < >
            <input id="checkbox2" type="checkbox" checked={isSideBarShow} />
            <label class="toggle toggle2" for="checkbox2" >
                <div id="bar4" class="bars"></div>
                <div id="bar5" class="bars"></div>
                <div id="bar6" class="bars"></div>
            </label>
        </>

    )
}

export default BtnSideBar