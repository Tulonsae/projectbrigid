import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

import "./navbar.scss";
import {
  selectArticles,
  selectIdentity,
  selectWorld,
  selectWorlds,
} from "@/components/store/apiSlice";
import { useSelector } from "react-redux";
import WorldSelect from "../WorldSelect/worldselect";
import { selectAuthToken } from "@/components/store/authSlice";
import IdentityForm from "../Identity/identity";

const NavBar = () => {
  const world = useSelector(selectWorld);
  const worlds = useSelector(selectWorlds);
  const articles = useSelector(selectArticles);
  const identity = useSelector(selectIdentity);
  const authToken = useSelector(selectAuthToken);

  return (
    <div>
      {(!authToken || !identity.success) && <IdentityForm />}
      <div className="navigation">
        {authToken && identity.success && (
          <Nav className="navbar-dark bg-dark">
            <Nav.Item>
              <Nav.Link as={Link} eventKey="1" href="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                eventKey="1"
                href="/worldanvil/apitool"
                disabled={!world.success && articles.length > 1}
              >
                API Tool
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                eventKey="1"
                href="/worldanvil/statistics"
                disabled={!world.success && articles.length > 1}
              >
                World Statistics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="1" href="/worldanvil/search">
                World Search
              </Nav.Link>
            </Nav.Item>
            {worlds.success && (
              <Nav.Item>
                <div className="world-selector-nav">
                  <WorldSelect></WorldSelect>
                </div>
              </Nav.Item>
            )}
          </Nav>
        )}
      </div>
    </div>
  );
};

export default NavBar;