import Image from "next/image";
import { useContext } from "react";
import { PublishContext } from "../context/PublishContext";

function SideView({ handleClick }) {
  const { bookCount, setShow, setModalScrns } = useContext(
    PublishContext
  ).contextValue;

  const handleInvitePublisher = () => {
    setModalScrns("InvitePublisher");
    setShow(true);
  };

  return (
    <div className="sideview position-relative ml-4 ">
      <div className="position-relative bg-white rounded-lg shadow-sm pb-3">
        <div className="d-flex pt-3 px-4 pb-2 align-items-center">
          <div className="mr-3">
            <svg
              version="1.1"
              x={0}
              y={0}
              viewBox="0 0 58 58"
              style={{ width: "42px" }}
              xmlSpace="preserve"
            >
              <g>
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  id="Page-1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="030---Messy-Books" fillRule="nonzero">
                    <path
                      id="Shape"
                      d="m5.72 52.21-5.55-31.51c-.05359011-.3041252-.08699643-.6114633-.1-.92-.08248096-3.5724087 2.48267266-6.6582757 6.01-7.23l10.71-1.89-.29 41.55z"
                      fill="#004e9f"
                      data-original="#35495e"
                    />
                    <path
                      id="Shape"
                      d="m46.94 50.83c-.1857191.771023-.8094746 1.3594717-1.59 1.5l-31.52 5.56c-1.9867206.3468301-4.02657856-.1786842-5.59841615-1.4422808-1.57183758-1.2635966-2.52340318-3.1428808-2.61158385-5.1577192-.07876599-3.4155632 2.27277316-6.4084312 5.61-7.14l8.83 2.48h-.01l-7.95 1.41c-.8866555.1558432-1.656734.7009972-2.0983662 1.4854753-.44163213.7844782-.50828985 1.7256321-.1816338 2.5645247.5656214 1.3511449 2.0021594 2.1195258 3.44 1.84l24.09-4.25z"
                      fill="#0080ff"
                      data-original="#2c3e50"
                    />
                    <path
                      id="Shape"
                      d="m20.05 46.63-7.95 1.41c-.8866555.1558432-1.656734.7009972-2.0983662 1.4854753-.44163213.7844782-.50828985 1.7256321-.1816338 2.5645247.5656214 1.3511449 2.0021594 2.1195258 3.44 1.84l24.09-4.25z"
                      fill="#f9eab0"
                      data-original="#f9eab0"
                      style={{}}
                    />
                    <path
                      id="Shape"
                      d="m12.826 33.171 5.557-31.514c.1989194-1.08324679 1.2310871-1.80580869 2.317-1.622l31.277 5.515c3.5298611.57216709 6.0970156 3.66000793 6.015 7.235-.0136036.3071659-.0470063.6131344-.1.916l-5.557 31.514z"
                      fill="#ffe823"
                      data-original="#e64c3c"
                    />
                    <path
                      id="Shape"
                      d="m45.438 10.474c-.0586532-.0000276-.1171977-.0050457-.175-.015l-22.651-3.994c-.5111685-.12606546-.837041-.62687769-.7452297-1.14529488.0918113-.5184172.5698565-.87685619 1.0932297-.81970512l22.65 3.989c.5108329.08948831.8684834.55465053.8237134 1.07132656-.0447699.51667604-.4771014.91338644-.9957134.91367344z"
                      fill="#2ab3ff"
                      data-original="#3f5c6c"
                    />
                    <path
                      id="Shape"
                      d="m40.63 14.7c-.0587024.0000849-.1172863-.0052713-.175-.016l-14.772-2.601c-.5314773-.1077828-.8801906-.6195404-.7860712-1.1536068.0941194-.5340663.5967671-.8957872 1.1330712-.8153932l14.773 2.6c.5138125.0868279.8748237.55367.8296023 1.0728015-.0452214.5191314-.4815156.9165204-1.0026023.9131985z"
                      fill="#2ab3ff"
                      data-original="#3f5c6c"
                    />
                    <rect
                      id="Rectangle-path"
                      fill="#ecf0f1"
                      height={12}
                      rx={1}
                      transform="matrix(.985 .174 -.174 .985 4.511 -5.088)"
                      width={23}
                      x="19.833"
                      y="17.234"
                      data-original="#ecf0f1"
                    />
                    <path
                      id="Shape"
                      d="m57.99 12.78c-.0119064.3086184-.0453208.6160308-.1.92l-5.56 31.51-7.71-2.35 4.47-25.34 1.06-5.98 1.08-6.12.75.13c3.5257169.57454224 6.0894162 3.6586597 6.01 7.23z"
                      fill="#ff9b18"
                      data-original="#c03a2b"
                    />
                    <path
                      id="Shape"
                      d="m46.42 37.06-31.28-5.51c-.1156046-.0199087-.2326936-.0299449-.35-.03-1.0364668.0026285-1.8991916.7966438-1.9876335 1.8293337-.088442 1.0326898.6267071 1.9618379 1.6476335 2.1406663l31.51 5.55c.8858791.1604248 1.6536061.708589 2.0929592 1.4943923.439353.7858033.5042941 1.7269044.1770408 2.5656077-.5625614 1.3481553-1.9969395 2.1134358-3.43 1.83l-31.39-5.53c-.1156046-.0199087-.2326936-.0299449-.35-.03-1.0383851-.0025575-1.9060067.7899765-1.9971986 1.8243528-.0911918 1.0343762.624383 1.9664868 1.6471986 2.1456472l31.52 5.55c1.9852737.3480364 4.0242759-.1756778 5.5960992-1.4373484 1.5718232-1.2616705 2.5242277-3.1390976 2.6139008-5.1526516.0784876-3.576507-2.4892143-6.6645738-6.02-7.24z"
                      fill="#ffffff"
                      data-original="#802f34"
                    />
                    <path
                      id="Shape"
                      d="m48.23 45.1c-.5625614 1.3481553-1.9969395 2.1134358-3.43 1.83l-31.39-5.53 1.04-5.91 31.51 5.55c.8858791.1604248 1.6536061.708589 2.0929592 1.4943923.439353.7858033.5042941 1.7269044.1770408 2.5656077z"
                      fill="#f9eab0"
                      data-original="#f9eab0"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div>
            <h4 className="m-0">
              <strong>{bookCount}</strong>
            </h4>
            <h6 className="text-muted">Total Books</h6>
          </div>
        </div>
        <div className="postion-relative mx-4">
          <button
            className="btn btn-block btn-sm btn-primary btn-primary--sh-none"
            onClick={handleClick}
          >
            Add a Book
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg text-center p-3 mt-4 border">
        <div className="text-center">
          <Image src="/profile.svg" height={50} width={50} alt="publisher" />
        </div>
        <button
          onClick={handleInvitePublisher}
          className="btn-block btn btn-primary btn-sm mt-2"
        >
          Invite a Publisher
        </button>
      </div>
    </div>
  );
}

export default SideView;
