import styled from "styled-components";

export const WrapperProgressBar = styled.div`
  width: 100%;
  padding-bottom: 15%;
`;

export const WrapperProgressBarUl = styled.ul``;

export const WrapperProgressBarLi = styled.li`
  list-style-type: none;
  float: left;
  width: 33%;
  position: relative;
  text-align: center;

  :before {
    content: " ";
    line-height: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    background-color: white;
  }

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
  }

  :first-child:after {
    content: none;
  }
`;

export const WrapperProgressBarLiActive = styled.li`
  list-style-type: none;
  float: left;
  width: 33%;
  position: relative;
  text-align: center;

  :before {
    content: " ";
    line-height: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    background-color: white;
  }

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
  }

  :first-child:after {
    content: none;
  }

  color: dodgerblue;
  :after {
    background-color: dodgerblue;
  }

  :before {
    border-color: dodgerblue;
    background-color: dodgerblue;
  }
`;

//   color: ${(props) => (props.active ? "white" : "palevioletred")};

{
  /* <style jsx>{`


            .progressBar {
            }



            .progressBar li:first-child:after {
              content: none;
            }

            .progressBar li.active {
              color: dodgerblue;
            }

            .progressBar li.active:before {
              border-color: dodgerblue;
              background-color: dodgerblue;
            }

            .progressBar .active:after {
              background-color: dodgerblue;
            }
          `}</style>
          <div className="wrapper-progressBar">
            <ul className="progressBar">
              {childrenArray.map((child, index) => (
                <li className={step > index - 1 || completed ? "active" : ""}>
                  {child.props.label}
                </li>
              ))}
            </ul>
          </div> */
}
