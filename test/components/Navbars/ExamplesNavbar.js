import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  //UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="black" expand="lg">
        <Container>
        <div className="navbar-translate">
            <NavbarBrand
              href="index"
              // target="_blank" 새창
              id="navbar-brand"
            >
              Travel16
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >

             <Nav navbar>
              <NavItem>
              <NavLink
              href="test-page"
            >
             <p>여행성향테스트</p>
            </NavLink>
              </NavItem>

              {/* <NavItem>
              <NavLink
              href="tour-page"
            >
             <p>전국여행</p>
              </NavLink>
              </NavItem> */}

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>테마여행</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="picture-page"
                  >
                  <p>사진여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="walking-page"
                    // target="_blank"
                  >
                    <p>뚜벅여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="camping-page"
                    // target="_blank"
                  >
                    <p>캠핑여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="
                    food-page"
                    // target="_blank"
                  >
                    <p>맛집여행</p>
                  </DropdownItem>
                  <DropdownItem
                    href="music-page"
                    // target="_blank"
                  >
                    <p>음악여행</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <p>게시판</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem href="board-page"
                  >
                  <p>자유게시판</p>
                  </DropdownItem>
                  <DropdownItem
                    href="picchung-page"
                    // target="_blank"
                  >
                    <p>사진게시판</p>
                  </DropdownItem>
                  <DropdownItem
                    href="
                    qna-page"
                    // target="_blank"
                  >
                    <p>Q&A</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
              <NavLink
              href="calendars"       
            >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i>    아이콘 */}
                  <p>달력</p>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
               
                  <p>마이페이지</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem href="join-page"
                  >
                  <p>정보수정</p>
                  </DropdownItem>
                  <DropdownItem
                    href="login-page"
                    // target="_blank"
                  >
                    <p>로그아웃</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                
              <NavItem>
              <NavLink
              href="login-page"
            >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i>    아이콘 */}
                  <p>로그인</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
