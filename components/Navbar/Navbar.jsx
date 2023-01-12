import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//icon imports
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//internal imports
import styles from "./Navbar.module.css";
import { Discover, HelpCenter, Notification, Sidebar, Profile } from "./index";
import { Button } from "../index";

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideBarMenu, setOpenSideBarMneu] = useState(false);
  return <div>Navbar</div>;
};

export default Navbar;
