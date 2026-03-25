    import React, { useEffect, useState } from "react";
    import { Menu, Moon, Sun } from "lucide-react";
    import { Link, NavLink } from "react-router";

    const Navbar = () => {
    const [theme, setTheme] = useState("caramellatte");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "caramellatte";
        // setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dracula" ? "caramellatte" : "dracula";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    };

    const navLinks = (
        <>
        {["Home", "Collection", "Submit"].map((item, index) => (
            <li key={index}>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition-all duration-300 
                hover:bg-primary hover:text-white 
                ${
                    isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-base-content"
                }`
                }
            >
                {item}
            </NavLink>
            </li>
        ))}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">

        {/* LEFT */}
        <div className="navbar-start">
            <h1 className="md:text-2xl text-xl font-bold font-newsreader tracking-wide">
            Dumb <span className="italic text-primary">Museum</span>
            </h1>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 font-semibold uppercase">
            {navLinks}
            </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-2">

            {/* Theme Toggle */}
            <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle hover:bg-primary hover:text-white transition"
            >
            {theme === "dracula" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                className="avatar cursor-pointer hover:scale-105 transition"
            >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                    alt="User"
                    src="https://ucarecdn.com/22571163-5ede-4931-92dd-723a34404fc2/download.png"
                />
                </div>
            </div>

            <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-52 p-2 shadow bg-base-200 rounded-box"
            >
                <li>
                <Link to={"/dashboard"} className="flex justify-between">
                    Dashboard
                    <span className="badge badge-primary">New</span>
                </Link>
                </li>
            </ul>
            </div>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-square">
                <Menu size={20} />
            </label>
            <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-52 p-2 shadow bg-base-200 rounded-box"
            >
                {navLinks}
            </ul>
            </div>
        </div>
        </div>
    );
    };

    export default Navbar;