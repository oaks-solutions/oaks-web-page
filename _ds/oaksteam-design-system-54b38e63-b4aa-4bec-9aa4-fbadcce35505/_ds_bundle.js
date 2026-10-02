/* @ds-bundle: {"format":3,"namespace":"OAKSDesignSystem_54b38e","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"AppSidebar","sourcePath":"ui_kits/learning_app/AppSidebar.jsx"},{"name":"Dashboard","sourcePath":"ui_kits/learning_app/Dashboard.jsx"},{"name":"LoginScreen","sourcePath":"ui_kits/learning_app/LoginScreen.jsx"},{"name":"QuizScreen","sourcePath":"ui_kits/learning_app/QuizScreen.jsx"},{"name":"Hero","sourcePath":"ui_kits/marketing/Hero.jsx"},{"name":"ImpactBand","sourcePath":"ui_kits/marketing/ImpactBand.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/marketing/ImpactBand.jsx"},{"name":"SiteNav","sourcePath":"ui_kits/marketing/SiteNav.jsx"},{"name":"SolutionsGrid","sourcePath":"ui_kits/marketing/SolutionsGrid.jsx"}],"sourceHashes":{"auth.jsx":"18f84a5ca4fd","components/core/Avatar.jsx":"c69101778e1b","components/core/Badge.jsx":"d9c1ac5b193f","components/core/Button.jsx":"07bbfe040ca5","components/core/Card.jsx":"f1c5737b9e64","components/core/Icon.jsx":"bedf70433095","components/core/Input.jsx":"82d9004f21fe","components/core/ProgressBar.jsx":"7209739fca84","components/core/StatTile.jsx":"8c245a9078f7","components/core/Switch.jsx":"b0020c92dced","components/core/Tabs.jsx":"7fd35d6a3486","hr_portal/auth.jsx":"ae5ae05cab75","hr_portal/icons.jsx":"d71867b1a59c","hr_portal/tweaks-panel.jsx":"6591467622ed","ui_kits/learning_app/AppSidebar.jsx":"95bf6bc30217","ui_kits/learning_app/Dashboard.jsx":"e6fe45bcf6ff","ui_kits/learning_app/Icons.jsx":"deddcddc7eed","ui_kits/learning_app/LoginScreen.jsx":"544f8972211f","ui_kits/learning_app/QuizScreen.jsx":"e4f922634adf","ui_kits/marketing/Hero.jsx":"9d3964614c5a","ui_kits/marketing/ImpactBand.jsx":"6f87a6dd5596","ui_kits/marketing/SiteNav.jsx":"8773035304f8","ui_kits/marketing/SolutionsGrid.jsx":"eeabe828acbc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OAKSDesignSystem_54b38e = window.OAKSDesignSystem_54b38e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// auth.jsx
try { (() => {
// OaksTeam HR Portal — auth app. Loaded via <script type="text/babel">. No import/export.
const HRIcon = window.HRIcon;
function hexA(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16),
    g = parseInt(h.substring(2, 4), 16),
    b = parseInt(h.substring(4, 6), 16);
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
const TWEAK_DEFAULTS = {
  theme: "light",
  accent: "#1b6ef3",
  layout: "left",
  showFeatures: true
};

/* ----------------------------- mock data ----------------------------- */
const SEED_USERS = {
  "ceo@oaks.guru": {
    password: "Oaks@123",
    role: "super",
    name: "Rajesh Verma",
    title: "Chief Executive Officer"
  },
  "chairman@oaks.guru": {
    password: "Oaks@123",
    role: "super",
    name: "K. Eswar Rao",
    title: "Chairman"
  },
  "hr@oaks.guru": {
    password: "Oaks@123",
    role: "hr",
    name: "Divya Reddy",
    title: "Head of Human Resources"
  },
  "manager@oaks.guru": {
    password: "Oaks@123",
    role: "manager",
    name: "Parthasarathi R",
    title: "Engineering Manager"
  },
  "employee@oaks.guru": {
    password: "Oaks@123",
    role: "employee",
    name: "Avinash Udayagiri",
    title: "Frontend Developer"
  },
  "newjoinee@oaks.guru": {
    password: "Temp@456",
    role: "employee",
    name: "Aarav Sharma",
    title: "Associate Trainee",
    firstTime: true
  }
};
const ROLES = {
  super: {
    label: "Super Admin",
    icon: "crown",
    color: "#f5a623"
  },
  hr: {
    label: "HR Admin",
    icon: "users",
    color: "var(--accent)"
  },
  manager: {
    label: "Manager",
    icon: "briefcase",
    color: "#16c79a"
  },
  employee: {
    label: "Employee",
    icon: "user",
    color: "#7c5cff"
  }
};
const FEATURES = [{
  icon: "user",
  label: ["Employee", "Self Service"],
  grad: "linear-gradient(145deg,#2f86ff,#1b6ef3)"
}, {
  icon: "calendar",
  label: ["Attendance", "& Leave"],
  grad: "linear-gradient(145deg,#16c79a,#0ea57f)"
}, {
  icon: "file",
  label: ["Updates &", "Announcements"],
  grad: "linear-gradient(145deg,#9b6bff,#7c5cff)"
}, {
  icon: "growth",
  label: ["Performance", "& Growth"],
  grad: "linear-gradient(145deg,#f9a826,#f5760b)"
}];
const SKYLINE = [60, 92, 48, 124, 72, 150, 56, 104, 82, 132, 46, 98, 64, 116];
function genTemp() {
  var s = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
    out = "";
  for (var i = 0; i < 6; i++) out += s[Math.floor(Math.random() * s.length)];
  return "OAKS-" + out;
}

/* ----------------------------- field ----------------------------- */
function Field(props) {
  const [show, setShow] = React.useState(false);
  const isPw = props.type === "password";
  const t = isPw ? show ? "text" : "password" : props.type || "text";
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, props.label), /*#__PURE__*/React.createElement("div", {
    className: "field-box" + (props.error ? " err" : "")
  }, props.icon && /*#__PURE__*/React.createElement(HRIcon, {
    name: props.icon,
    size: 18,
    color: "var(--muted)"
  }), /*#__PURE__*/React.createElement("input", {
    type: t,
    value: props.value,
    onChange: props.onChange,
    onKeyDown: props.onKeyDown,
    placeholder: props.placeholder,
    autoFocus: props.autoFocus,
    autoComplete: "off",
    spellCheck: "false"
  }), isPw && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "eye",
    onClick: () => setShow(!show),
    "aria-label": "Show or hide password",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: show ? "eyeOff" : "eye",
    size: 19,
    color: "var(--muted)"
  }))), props.error && /*#__PURE__*/React.createElement("div", {
    className: "field-err"
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: "alert",
    size: 14,
    color: "var(--danger)"
  }), " ", props.error));
}
function Banner(props) {
  const map = {
    error: "alert",
    success: "checkCircle",
    info: "info"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "banner " + props.kind
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: map[props.kind],
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, props.children));
}

/* ----------------------------- brand panel ----------------------------- */
function BrandPanel(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-logo",
    src: "../assets/logos/oaks-logo-white.png",
    alt: "OAKS Solutions",
    style: {
      width: "206px",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "brand-mid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "welcome-to"
  }, "Welcome to"), /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Oaks", /*#__PURE__*/React.createElement("span", {
    className: "blue"
  }, "Team")), /*#__PURE__*/React.createElement("div", {
    className: "uline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tagline"
  }, "Your Workplace. ", /*#__PURE__*/React.createElement("span", {
    className: "blue"
  }, "Simplified.")), /*#__PURE__*/React.createElement("div", {
    className: "lead"
  }, "Everything you need to manage your work life, all in one place."), props.showFeatures && /*#__PURE__*/React.createElement("div", {
    className: "features"
  }, FEATURES.map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      className: "feature",
      key: f.label.join(" ")
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile",
      style: {
        background: f.grad
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: f.icon,
      size: 26,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flabel"
    }, f.label.map(function (l, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, l);
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "skyline"
  }, SKYLINE.map(function (h, i) {
    return /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        height: h
      }
    });
  })));
}

/* ----------------------------- app ----------------------------- */
function App() {
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakColor,
    TweakToggle
  } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [users, setUsers] = React.useState(SEED_USERS);
  const [screen, setScreen] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState({});
  const [notice, setNotice] = React.useState(null);
  const [fEmail, setFEmail] = React.useState("");
  const [tempIssued, setTempIssued] = React.useState("");
  const [resetEmail, setResetEmail] = React.useState("");
  const [rTemp, setRTemp] = React.useState("");
  const [np1, setNp1] = React.useState("");
  const [np2, setNp2] = React.useState("");
  const [pendingEmail, setPendingEmail] = React.useState("");
  const [current, setCurrent] = React.useState(null);
  React.useEffect(function () {
    const r = document.documentElement;
    r.setAttribute("data-theme", t.theme);
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--accent-2", t.accent);
    r.style.setProperty("--accent-soft", hexA(t.accent, 0.12));
  }, [t.theme, t.accent]);
  function go(s) {
    setErr({});
    setScreen(s);
  }
  function doLogin() {
    setNotice(null);
    const e = email.trim().toLowerCase();
    if (!e) {
      setErr({
        email: "Please enter your email."
      });
      return;
    }
    if (!e.endsWith("@oaks.guru")) {
      setErr({
        email: "Only @oaks.guru accounts can sign in. Please contact the HR to get access."
      });
      return;
    }
    const u = users[e];
    if (!u) {
      setErr({
        email: "No account found for this email. Please contact the HR to create your login."
      });
      return;
    }
    if (!password) {
      setErr({
        password: "Please enter your password."
      });
      return;
    }
    if (password !== u.password) {
      setErr({
        password: "Incorrect password. Try again or reset it below."
      });
      return;
    }
    if (u.firstTime) {
      setPendingEmail(e);
      setNp1("");
      setNp2("");
      go("firstTime");
      return;
    }
    setCurrent(Object.assign({
      email: e
    }, u));
    go("success");
  }
  function doForgot() {
    const e = fEmail.trim().toLowerCase();
    if (!e.endsWith("@oaks.guru") || !users[e]) {
      setErr({
        fEmail: "We couldn't find an @oaks.guru account with that email. Please contact the HR."
      });
      return;
    }
    const temp = genTemp();
    setUsers(function (prev) {
      const n = Object.assign({}, prev);
      n[e] = Object.assign({}, n[e], {
        password: temp,
        firstTime: false
      });
      return n;
    });
    setTempIssued(temp);
    setResetEmail(e);
    setRTemp("");
    setNp1("");
    setNp2("");
    go("sent");
  }
  function doReset() {
    const u = users[resetEmail];
    if (rTemp.trim() !== u.password) {
      setErr({
        rTemp: "That temporary password doesn't match the one we emailed."
      });
      return;
    }
    if (np1.length < 6) {
      setErr({
        np1: "Use at least 6 characters."
      });
      return;
    }
    if (np1 !== np2) {
      setErr({
        np2: "Passwords don't match."
      });
      return;
    }
    setUsers(function (prev) {
      const n = Object.assign({}, prev);
      n[resetEmail] = Object.assign({}, n[resetEmail], {
        password: np1
      });
      return n;
    });
    setEmail(resetEmail);
    setPassword("");
    setNotice({
      kind: "success",
      text: "Password updated. You can sign in now."
    });
    go("login");
  }
  function doFirstTime() {
    if (np1.length < 6) {
      setErr({
        np1: "Use at least 6 characters."
      });
      return;
    }
    if (np1 !== np2) {
      setErr({
        np2: "Passwords don't match."
      });
      return;
    }
    setUsers(function (prev) {
      const n = Object.assign({}, prev);
      n[pendingEmail] = Object.assign({}, n[pendingEmail], {
        password: np1,
        firstTime: false
      });
      return n;
    });
    const u = Object.assign({}, users[pendingEmail], {
      password: np1,
      firstTime: false
    });
    setCurrent(Object.assign({
      email: pendingEmail
    }, u));
    go("success");
  }
  function logout() {
    setEmail("");
    setPassword("");
    setCurrent(null);
    setNotice(null);
    go("login");
  }
  let body;
  if (screen === "login") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Welcome back!"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "Sign in to continue to your account"), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, notice && /*#__PURE__*/React.createElement(Banner, {
      kind: notice.kind
    }, notice.text), /*#__PURE__*/React.createElement(Field, {
      label: "Email",
      type: "email",
      icon: "mail",
      placeholder: "Enter your email",
      value: email,
      onChange: function (e) {
        setEmail(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doLogin();
      },
      error: err.email,
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Password",
      type: "password",
      icon: "lock",
      placeholder: "Enter your password",
      value: password,
      onChange: function (e) {
        setPassword(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doLogin();
      },
      error: err.password
    }), /*#__PURE__*/React.createElement("div", {
      className: "row-end"
    }, /*#__PURE__*/React.createElement("button", {
      className: "link",
      onClick: function () {
        setFEmail(email);
        go("forgot");
      }
    }, "Forgot password?")), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doLogin
    }, "Sign in"), /*#__PURE__*/React.createElement("div", {
      className: "hint"
    }, "Demo \xB7 ", /*#__PURE__*/React.createElement("code", null, "hr@oaks.guru"), " / ", /*#__PURE__*/React.createElement("code", null, "Oaks@123"), " \xA0\xB7\xA0 First-time \xB7 ", /*#__PURE__*/React.createElement("code", null, "newjoinee@oaks.guru"), " / ", /*#__PURE__*/React.createElement("code", null, "Temp@456"))));
  } else if (screen === "forgot") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("button", {
      className: "back",
      onClick: function () {
        go("login");
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "arrowLeft",
      size: 16
    }), " Back to sign in"), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Forgot password?"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "Enter your OAKS email and we'll send a temporary password to reset it."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Email",
      type: "email",
      icon: "mail",
      placeholder: "Enter your email",
      value: fEmail,
      onChange: function (e) {
        setFEmail(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doForgot();
      },
      error: err.fEmail,
      autoFocus: true
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doForgot
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "send",
      size: 18,
      color: "#fff"
    }), " Send temporary password")));
  } else if (screen === "sent") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("div", {
      className: "big-icon"
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "mail",
      size: 32,
      color: "var(--accent)"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Check your inbox"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "We've emailed a temporary password to ", /*#__PURE__*/React.createElement("b", null, resetEmail), ". Use it to set a new password."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Banner, {
      kind: "info"
    }, "Demo only \u2014 your temporary password is ", /*#__PURE__*/React.createElement("code", null, tempIssued)), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: function () {
        go("reset");
      }
    }, "Reset password now"), /*#__PURE__*/React.createElement("button", {
      className: "link center",
      onClick: function () {
        go("login");
      }
    }, "Back to sign in")));
  } else if (screen === "reset") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("button", {
      className: "back",
      onClick: function () {
        go("sent");
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "arrowLeft",
      size: 16
    }), " Back"), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Set a new password"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "For ", /*#__PURE__*/React.createElement("b", null, resetEmail)), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Temporary password",
      type: "password",
      icon: "lock",
      placeholder: "Paste the password we emailed",
      value: rTemp,
      onChange: function (e) {
        setRTemp(e.target.value);
        setErr({});
      },
      error: err.rTemp,
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "New password",
      type: "password",
      icon: "lock",
      placeholder: "At least 6 characters",
      value: np1,
      onChange: function (e) {
        setNp1(e.target.value);
        setErr({});
      },
      error: err.np1
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Confirm new password",
      type: "password",
      icon: "lock",
      placeholder: "Re-type new password",
      value: np2,
      onChange: function (e) {
        setNp2(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doReset();
      },
      error: err.np2
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doReset
    }, "Update password")));
  } else if (screen === "firstTime") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("div", {
      className: "big-icon"
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "shield",
      size: 30,
      color: "var(--accent)"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Welcome to OAKS!"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "First time here \u2014 set a password to secure your account, ", /*#__PURE__*/React.createElement("b", null, users[pendingEmail] && users[pendingEmail].name), "."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Create password",
      type: "password",
      icon: "lock",
      placeholder: "At least 6 characters",
      value: np1,
      onChange: function (e) {
        setNp1(e.target.value);
        setErr({});
      },
      error: err.np1,
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Confirm password",
      type: "password",
      icon: "lock",
      placeholder: "Re-type password",
      value: np2,
      onChange: function (e) {
        setNp2(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doFirstTime();
      },
      error: err.np2
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doFirstTime
    }, "Set password & continue")));
  } else if (screen === "success") {
    const meta = ROLES[current.role];
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("div", {
      className: "big-icon"
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "checkCircle",
      size: 32,
      color: "var(--success)"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "You're signed in"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "Welcome, ", current.name, "."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ok-role",
      style: {
        borderColor: meta.color,
        color: meta.color
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: meta.icon,
      size: 15,
      color: meta.color
    }), " ", meta.label, " \xB7 ", current.title), /*#__PURE__*/React.createElement(Banner, {
      kind: "success"
    }, "Authenticated against your @oaks.guru credentials and routed to the ", meta.label, " workspace."), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: logout
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "logout",
      size: 18,
      color: "#fff"
    }), " Sign out")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "stage" + (t.layout === "right" ? " rev" : "")
  }, /*#__PURE__*/React.createElement(BrandPanel, {
    showFeatures: t.showFeatures
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle",
    onClick: function () {
      setTweak("theme", t.theme === "light" ? "dark" : "light");
    },
    "aria-label": "Toggle theme"
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: t.theme === "light" ? "moon" : "sun",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "lang"
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: "globe",
    size: 16,
    color: "var(--text-2)"
  }), " English ", /*#__PURE__*/React.createElement(HRIcon, {
    name: "chevronDown",
    size: 15,
    color: "var(--muted)"
  })), body), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Appearance"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Theme",
    value: t.theme,
    options: ["light", "dark"],
    onChange: function (v) {
      setTweak("theme", v);
    }
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ["#1b6ef3", "#0795c9", "#2f86ff", "#6d5cff"],
    onChange: function (v) {
      setTweak("accent", v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Layout"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Brand side",
    value: t.layout,
    options: ["left", "right"],
    onChange: function (v) {
      setTweak("layout", v);
    }
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Feature tiles",
    value: t.showFeatures,
    onChange: function (v) {
      setTweak("showFeatures", v);
    }
  })));
}
window.HRApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "auth.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Avatar — initials or image, with optional status ring.
 */
function Avatar({
  name = "",
  src = null,
  size = 44,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join("");
  // deterministic brand-family color from name
  const palette = ["var(--blue-500)", "var(--navy-500)", "var(--teal-500)", "var(--amber-500)", "var(--coral-500)"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % palette.length;
  const bg = palette[h];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      background: src ? "var(--slate-200)" : bg,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: size * 0.4,
      flexShrink: 0,
      overflow: "hidden",
      boxShadow: ring ? "0 0 0 2px var(--surface-card), 0 0 0 4px var(--blue-400)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Badge — compact status / category label.
 */
function Badge({
  children,
  variant = "neutral",
  solid = false,
  size = "md",
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      soft: ["var(--slate-100)", "var(--slate-600)"],
      solid: ["var(--slate-600)", "#fff"]
    },
    brand: {
      soft: ["var(--blue-50)", "var(--blue-700)"],
      solid: ["var(--blue-500)", "#fff"]
    },
    success: {
      soft: ["var(--green-100)", "var(--green-600)"],
      solid: ["var(--green-500)", "#fff"]
    },
    warning: {
      soft: ["var(--yellow-100)", "var(--amber-600)"],
      solid: ["var(--yellow-500)", "var(--navy-800)"]
    },
    danger: {
      soft: ["var(--red-100)", "var(--red-600)"],
      solid: ["var(--red-500)", "#fff"]
    },
    reward: {
      soft: ["var(--amber-100)", "var(--amber-600)"],
      solid: ["var(--amber-500)", "var(--navy-800)"]
    }
  };
  const [bg, fg] = (palette[variant] || palette.neutral)[solid ? "solid" : "soft"];
  const dims = size === "sm" ? {
    fontSize: 11,
    padding: "2px 8px"
  } : {
    fontSize: 12,
    padding: "4px 10px"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1.4,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...dims,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Button — primary action control.
 * Variants: primary (brand blue), secondary (navy), outline, ghost, reward (amber).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 14px",
      height: 36,
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: "0 20px",
      height: 44,
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: "0 28px",
      height: 54,
      fontSize: 17,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--color-brand)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--navy-600)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-brand)",
      border: "1.5px solid var(--blue-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy-600)",
      border: "1px solid transparent"
    },
    reward: {
      background: "var(--amber-500)",
      color: "var(--navy-800)",
      border: "1px solid transparent",
      boxShadow: "0 6px 16px rgba(245,158,11,0.32)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverBg = {
    primary: "var(--color-brand-hover)",
    secondary: "var(--navy-700)",
    outline: "var(--blue-50)",
    ghost: "var(--slate-100)",
    reward: "var(--amber-600)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: fullWidth ? "100%" : "auto",
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      transform: active && !disabled ? "scale(0.97)" : "scale(1)",
      ...variants[variant],
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Card — surface container with optional hover lift.
 */
function Card({
  children,
  padding = 24,
  interactive = false,
  accent = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      borderTop: accent ? `3px solid ${accent}` : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OaksTeam Icon — official HR Portal icon set. 24x24, 2px stroke, round caps/joins.
 * Inherits currentColor; pass `color` for brand/semantic tints.
 */
const ICON_PATHS = {
  // ── Employee Management ──
  employees: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  addEmployee: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M19 8v6', 'M22 11h-6'],
  employeeProfile: ['M18 20a6 6 0 0 0-12 0', 'M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
  employeeDirectory: ['M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', 'M4 17.5A2.5 2.5 0 0 1 6.5 15H20', 'M12 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4z', 'M9 13.5a3 3 0 0 1 6 0'],
  orgChart: ['M9 3h6v4H9z', 'M3 17h6v4H3z', 'M15 17h6v4h-6z', 'M12 7v6', 'M6 13h12', 'M6 13v4', 'M18 13v4'],
  teams: ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M3 21v-2a6 6 0 0 1 12 0v2', 'M16 3.5a4 4 0 0 1 0 7', 'M21 21v-2a6 6 0 0 0-4-5.6'],
  rolesPermissions: ['M4 6h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z', 'M9 4h6v2H9z', 'M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M5.5 17a2.5 2.5 0 0 1 5 0', 'M14 11h4', 'M14 14h3'],
  // ── Dashboard & Overview ──
  dashboard: ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],
  analytics: ['M3 3v18h18', 'M7 15v-4', 'M12 15V8', 'M17 15v-6'],
  reports: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M8 17v-3', 'M12 17v-5', 'M16 17v-2'],
  notifications: ['M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
  announcements: ['m3 11 18-5v12L3 14v-3z', 'M11.6 16.8a3 3 0 1 1-5.8-1.6', 'M3 11v3'],
  // ── Attendance & Time ──
  attendance: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm9 16 2 2 4-4'],
  checkIn: ['M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4', 'M10 17l5-5-5-5', 'M15 12H3'],
  checkOut: ['M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
  attendanceSheet: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M9 13h6', 'M9 17h6', 'M9 9h1'],
  timesheet: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3 2'],
  workFromHome: ['M3 10.5 12 3l9 7.5', 'M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5', 'M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M9 18a3 3 0 0 1 6 0'],
  overtime: ['M10 2h4', 'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M12 14v-4', 'M16.5 6.5 18 5'],
  // ── Leave Management ──
  applyLeave: ['M5 5l14 14', 'M19 5 5 19', 'M5 9V5h4', 'M15 5h4v4'],
  myLeaves: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M15 2v5h5', 'M9 13h6', 'M9 17h4'],
  leaveBalance: ['M21.21 15.89A10 10 0 1 1 8 2.83', 'M22 12A10 10 0 0 0 12 2v10z'],
  leaveCalendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M12 15h.01'],
  leaveApproval: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'm9 14 2 2 4-4'],
  holidays: ['M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2.5', 'M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3', 'M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z', 'M11 15.5c.5 2.5-.17 4.5-1 6.5h9c2-5.5-.5-12-1-14'],
  leavePolicy: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'm9 12 2 2 4-4'],
  // ── Payroll & Compensation ──
  payroll: ['M3 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2', 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5', 'M16 13h2'],
  payslip: ['M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z', 'M8 8h8', 'M8 12h6', 'M8 16h4'],
  salaryStructure: ['M5 6c0-1.66 3.13-3 7-3s7 1.34 7 3-3.13 3-7 3-7-1.34-7-3z', 'M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6', 'M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6'],
  taxInformation: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M15 13l-6 6', 'M9.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z', 'M14.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z'],
  reimbursements: ['M12 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M12 5v4', 'M13 6.2a1.2 1.2 0 0 0-2.2.5c0 1.4 2.4.5 2.4 2a1.2 1.2 0 0 1-2.2.5', 'M3 15.5l3.2-1a2 2 0 0 1 .6-.1H11a1.5 1.5 0 0 1 0 3H8', 'M3 14v7', 'M6.5 21l4.5.9 7.4-2.7a1.7 1.7 0 0 0-1.3-3.1l-3.1 1.1'],
  loans: ['M16 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M16 4v4', 'M17 5.2a1.2 1.2 0 0 0-2.2.5c0 1.4 2.4.5 2.4 2a1.2 1.2 0 0 1-2.2.5', 'M3 16l3.2-1a2 2 0 0 1 .6-.1H11a1.5 1.5 0 0 1 0 3H8', 'M3 14.5v6.5', 'M6.5 21l4.5.9 7.4-2.7a1.7 1.7 0 0 0-1.3-3.1'],
  salaryAdvance: ['M3 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2', 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5', 'M14.5 12.5 17 10l2.5 2.5', 'M17 10v6'],
  // ── Performance Management ──
  goals: ['M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M12 14l8-8', 'M16 4h4v4'],
  performanceReview: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'M12 10l1.1 2.2 2.4.3-1.7 1.7.4 2.4-2.2-1.1-2.2 1.1.4-2.4-1.7-1.7 2.4-.3z'],
  kpis: ['m12 14 4-4', 'M3.34 19a10 10 0 1 1 17.32 0', 'M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
  feedback: ['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z', 'M8 12h.01', 'M12 12h.01', 'M16 12h.01'],
  appraisals: ['M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'],
  skills: ['M9.5 2a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 4.5 7 2.5 2.5 0 0 0 4 11.9 2.5 2.5 0 0 0 6 16.5 2.5 2.5 0 0 0 9.5 19 2.5 2.5 0 0 0 12 16.5V4.5A2.5 2.5 0 0 0 9.5 2z', 'M14.5 2a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19.5 7 2.5 2.5 0 0 1 20 11.9 2.5 2.5 0 0 1 18 16.5 2.5 2.5 0 0 1 14.5 19 2.5 2.5 0 0 1 12 16.5'],
  careerDevelopment: ['M3 21h4v-3h4v-3h4v-3h4', 'M18 12V4', 'M18 4l3 1.2L18 6.6'],
  // ── Recruitment ──
  jobOpenings: ['M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', 'M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z', 'M2 13h20'],
  candidates: ['M14 19a5 5 0 0 0-10 0', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M16 3.5a4 4 0 0 1 0 7', 'M16 13.5a5 5 0 0 1 4 5'],
  interviews: ['M13 19a5 5 0 0 0-10 0', 'M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M14 13.5l5-5 2.5 2.5-5 5H14z', 'M19 8.5l1 1'],
  offerLetter: ['M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'm3 7 9 6 9-6', 'm8.5 13 2.5 2.5 4-4'],
  onboarding: ['m11 17 2 2a1 1 0 1 0 3-3', 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4', 'm21 3 1 11h-2', 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3', 'M3 4h8'],
  taskManagement: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'm8.5 12 1.5 1.5 2.5-2.5', 'M14 11.5h3', 'm8.5 17 1.5 1.5 2.5-2.5', 'M14 16.5h3'],
  // ── Documents & Files ──
  documents: ['M4 4h6l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
  myFiles: ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M6.5 16a2.5 2.5 0 0 1 5 0', 'M15 8h3', 'M15 12h3', 'M8 19h8'],
  templates: ['M4 4h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z', 'M4 12h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z', 'M16 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z'],
  companyPolicies: ['M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', 'M4 17.5A2.5 2.5 0 0 1 6.5 15H20', 'M10 2v7l2-1.3L14 9V2'],
  eSignature: ['M3 17c2 0 2.5-7 4-7s1.5 7 3.5 7 2-9 3.5-9 1 6 3 6', 'M3 21h18'],
  download: ['M12 4v11', 'M8 11l4 4 4-4', 'M5 20h14'],
  upload: ['M12 20V9', 'M8 13l4-4 4 4', 'M5 5h14'],
  // ── Other Essentials ──
  inbox: ['M22 12h-6l-2 3h-4l-2-3H2', 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'],
  tasks: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'm8 12 3 3 5-6'],
  reminders: ['M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'],
  helpCenter: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3', 'M12 17h.01'],
  settings: ['M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  support: ['M5 13a7 7 0 0 1 14 0', 'M3 14a2 2 0 0 1 2-2h1v6H5a2 2 0 0 1-2-2v-2z', 'M21 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2z', 'M18 18v1a3 3 0 0 1-3 3h-3'],
  logout: ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
  // ── Legacy aliases (auth + learning app) ──
  mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm22 7-10 5L2 7'],
  lock: ['M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
  eye: ['M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  eyeOff: ['M9.88 9.88a3 3 0 1 0 4.24 4.24', 'M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68', 'M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61', 'm2 2 20 20'],
  sun: ['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', 'M12 1v2', 'M12 21v2', 'M4.22 4.22l1.42 1.42', 'M18.36 18.36l1.42 1.42', 'M1 12h2', 'M21 12h2', 'M4.22 19.78l1.42-1.42', 'M18.36 5.64l1.42-1.42'],
  moon: ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z'],
  arrowLeft: ['M19 12H5', 'M12 19l-7-7 7-7'],
  arrowRight: ['M5 12h14', 'm12 5 7 7-7 7'],
  check: ['M20 6 9 17l-5-5'],
  checkCircle: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'm9 12 2 2 4-4'],
  alert: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 8v4', 'M12 16h.01'],
  info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 16v-4', 'M12 8h.01'],
  shield: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'],
  crown: ['M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z', 'M5 21h14'],
  user: ['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'],
  send: ['M22 2 11 13', 'M22 2 15 22l-4-9-9-4z'],
  sparkles: ['M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z', 'M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8z'],
  chart: ['M3 3v16a2 2 0 0 0 2 2h16', 'M18 17V9', 'M13 17V5', 'M8 17v-3'],
  copy: ['M9 9h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
  file: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6'],
  globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
  chevronDown: ['m6 9 6 6 6-6'],
  growth: ['M3 3v16a2 2 0 0 0 2 2h16', 'M7 14l3-3 3 3 5-5', 'M18 9h-3', 'M18 9v3'],
  zap: ['M13 2 3 14h9l-1 8 10-12h-9l1-8z']
};
const ALIASES = {
  users: 'employees',
  userPlus: 'addEmployee',
  briefcase: 'jobOpenings',
  clock: 'timesheet',
  wallet: 'payroll'
};
Object.keys(ALIASES).forEach(function (k) {
  ICON_PATHS[k] = ICON_PATHS[ALIASES[k]];
});
const ICON_NAMES = Object.keys(ICON_PATHS);
function Icon({
  name,
  size = 22,
  color = "currentColor",
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  const paths = ICON_PATHS[name];
  if (!paths) {
    if (typeof console !== "undefined") console.warn("OaksTeam Icon: unknown name \"" + name + "\"");
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, rest), paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Input — text field with optional label, icon, hint/error.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  iconLeft = null,
  hint = null,
  error = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 13,
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 46,
      padding: "0 14px",
      background: disabled ? "var(--slate-100)" : "var(--surface-card)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--ring-brand)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-body)",
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS ProgressBar — learning progress / completion meter.
 */
function ProgressBar({
  value = 0,
  max = 100,
  color = "var(--blue-500)",
  height = 10,
  showLabel = false,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height,
      background: "var(--slate-200)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: color,
      borderRadius: "var(--radius-pill)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: "var(--fw-bold)",
      color: "var(--text-muted)",
      alignSelf: "flex-end"
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS StatTile — headline metric with label and optional trend.
 */
function StatTile({
  value,
  label,
  icon = null,
  accent = "var(--blue-500)",
  trend = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 20,
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "color-mix(in srgb, " + accent + " 14%, transparent)",
      color: accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      fontWeight: "var(--fw-black)",
      color: "var(--text-strong)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, value), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: "var(--fw-bold)",
      color: "var(--color-success)"
    }
  }, trend)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: "var(--fw-bold)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Switch — on/off toggle.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 46,
      height: 26,
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 3,
      cursor: disabled ? "not-allowed" : "pointer",
      background: checked ? "var(--color-brand)" : "var(--slate-300)",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out)",
      display: "flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-circle)",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transform: checked ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-spring)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OAKS Tabs — segmented navigation. Controlled via active/onChange.
 */
function Tabs({
  tabs = [],
  active,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      background: "var(--slate-100)",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), tabs.map(t => {
    const key = typeof t === "string" ? t : t.value;
    const labelText = typeof t === "string" ? t : t.label;
    const isActive = key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onChange && onChange(key),
      style: {
        border: "none",
        cursor: "pointer",
        padding: "8px 18px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: "var(--fw-bold)",
        color: isActive ? "var(--color-brand)" : "var(--text-muted)",
        background: isActive ? "var(--surface-card)" : "transparent",
        boxShadow: isActive ? "var(--shadow-sm)" : "none",
        transition: "all var(--dur-fast) var(--ease-out)"
      }
    }, labelText);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// hr_portal/auth.jsx
try { (() => {
// OaksTeam HR Portal — auth app. Loaded via <script type="text/babel">. No import/export.
const HRIcon = window.HRIcon;
function hexA(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16),
    g = parseInt(h.substring(2, 4), 16),
    b = parseInt(h.substring(4, 6), 16);
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
const TWEAK_DEFAULTS = {
  theme: "light",
  accent: "#1b6ef3",
  layout: "left",
  showFeatures: true
};

/* ----------------------------- mock data ----------------------------- */
const SEED_USERS = {
  "sreeharisai@oaks.guru": {
    password: "Oaks@123",
    role: "hr",
    name: "Sreehari Sai",
    title: "HR Administrator"
  },
  "ceo@oaks.guru": {
    password: "Oaks@123",
    role: "super",
    name: "Rajesh Verma",
    title: "Chief Executive Officer"
  },
  "chairman@oaks.guru": {
    password: "Oaks@123",
    role: "super",
    name: "K. Eswar Rao",
    title: "Chairman"
  },
  "hr@oaks.guru": {
    password: "Oaks@123",
    role: "hr",
    name: "Divya Reddy",
    title: "Head of Human Resources"
  },
  "manager@oaks.guru": {
    password: "Oaks@123",
    role: "manager",
    name: "Parthasarathi R",
    title: "Engineering Manager"
  },
  "employee@oaks.guru": {
    password: "Oaks@123",
    role: "employee",
    name: "Avinash Udayagiri",
    title: "Frontend Developer"
  },
  "newjoinee@oaks.guru": {
    password: "Temp@456",
    role: "employee",
    name: "Aarav Sharma",
    title: "Associate Trainee",
    firstTime: true
  }
};
const ROLES = {
  super: {
    label: "Super Admin",
    icon: "crown",
    color: "#f5a623"
  },
  hr: {
    label: "HR Admin",
    icon: "users",
    color: "var(--accent)"
  },
  manager: {
    label: "Manager",
    icon: "briefcase",
    color: "#16c79a"
  },
  employee: {
    label: "Employee",
    icon: "user",
    color: "#7c5cff"
  }
};
const FEATURES = [{
  icon: "user",
  label: ["Employee", "Self Service"],
  grad: "linear-gradient(145deg,#2f86ff,#1b6ef3)"
}, {
  icon: "calendar",
  label: ["Attendance", "& Leave"],
  grad: "linear-gradient(145deg,#16c79a,#0ea57f)"
}, {
  icon: "file",
  label: ["Updates &", "Announcements"],
  grad: "linear-gradient(145deg,#9b6bff,#7c5cff)"
}, {
  icon: "growth",
  label: ["Performance", "& Growth"],
  grad: "linear-gradient(145deg,#f9a826,#f5760b)"
}];
const PARTICLES = [{
  l: 8,
  s: 6,
  d: 17,
  dl: 0
}, {
  l: 18,
  s: 4,
  d: 23,
  dl: 4
}, {
  l: 29,
  s: 8,
  d: 19,
  dl: 7
}, {
  l: 40,
  s: 3,
  d: 27,
  dl: 2
}, {
  l: 52,
  s: 5,
  d: 21,
  dl: 5
}, {
  l: 63,
  s: 7,
  d: 16,
  dl: 1
}, {
  l: 72,
  s: 4,
  d: 25,
  dl: 8
}, {
  l: 83,
  s: 6,
  d: 20,
  dl: 3
}, {
  l: 90,
  s: 3,
  d: 29,
  dl: 6
}, {
  l: 46,
  s: 5,
  d: 24,
  dl: 10
}];
const SKYLINE = [60, 92, 48, 124, 72, 150, 56, 104, 82, 132, 46, 98, 64, 116];
function genTemp() {
  var s = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
    out = "";
  for (var i = 0; i < 6; i++) out += s[Math.floor(Math.random() * s.length)];
  return "OAKS-" + out;
}
function genStrong() {
  var U = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    L = "abcdefghijkmnpqrstuvwxyz",
    N = "23456789",
    S = "!@#$%&*";
  function pick(set, n) {
    var o = "";
    for (var i = 0; i < n; i++) o += set[Math.floor(Math.random() * set.length)];
    return o;
  }
  var base = pick(U, 2) + pick(L, 5) + pick(N, 3) + pick(S, 2);
  return base.split("").sort(function () {
    return Math.random() - 0.5;
  }).join("");
}
function scorePassword(pw) {
  var s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(4, Math.max(0, s - 1));
}
function strongEnough(pw) {
  return pw.length >= 8 && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw);
}
function greeting() {
  var h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}
var PW_LABELS = ["Weak", "Weak", "Medium", "Strong", "Very Strong"];
var PW_COLORS = ["#e24a4a", "#e24a4a", "#f5a623", "#1ca65b", "#12a85f"];
function StrengthMeter(props) {
  var lvl = scorePassword(props.value);
  var filled = Math.min(4, lvl + 1);
  return /*#__PURE__*/React.createElement("div", {
    className: "pw-meter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pw-bars"
  }, [0, 1, 2, 3].map(function (i) {
    return /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        background: i < filled ? PW_COLORS[lvl] : undefined
      }
    });
  })), /*#__PURE__*/React.createElement("span", {
    className: "pw-label",
    style: {
      color: PW_COLORS[lvl]
    }
  }, PW_LABELS[lvl]));
}
function PwReqs(props) {
  var v = props.value;
  var reqs = [{
    t: "8+ characters",
    ok: v.length >= 8
  }, {
    t: "Upper & lowercase",
    ok: /[A-Z]/.test(v) && /[a-z]/.test(v)
  }, {
    t: "A number",
    ok: /[0-9]/.test(v)
  }, {
    t: "A symbol",
    ok: /[^A-Za-z0-9]/.test(v)
  }];
  return /*#__PURE__*/React.createElement("ul", {
    className: "pw-reqs"
  }, reqs.map(function (r, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: r.ok ? "ok" : ""
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: r.ok ? "check" : "info",
      size: 13,
      color: r.ok ? "var(--success)" : "var(--muted)"
    }), " ", r.t);
  }));
}

/* ----------------------------- field ----------------------------- */
function Field(props) {
  const [show, setShow] = React.useState(false);
  const [caps, setCaps] = React.useState(false);
  const isPw = props.type === "password";
  const t = isPw ? show ? "text" : "password" : props.type || "text";
  function detectCaps(e) {
    try {
      if (e.getModifierState) setCaps(e.getModifierState("CapsLock"));
    } catch (_) {}
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, props.label), /*#__PURE__*/React.createElement("div", {
    className: "field-box" + (props.error ? " err" : "")
  }, props.icon && /*#__PURE__*/React.createElement(HRIcon, {
    name: props.icon,
    size: 18,
    color: "var(--muted)"
  }), /*#__PURE__*/React.createElement("input", {
    type: t,
    value: props.value,
    onChange: props.onChange,
    onKeyDown: function (e) {
      if (isPw) detectCaps(e);
      if (props.onKeyDown) props.onKeyDown(e);
    },
    onKeyUp: isPw ? detectCaps : undefined,
    placeholder: props.placeholder,
    autoFocus: props.autoFocus,
    autoComplete: "off",
    spellCheck: "false"
  }), isPw && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "eye",
    onClick: () => setShow(!show),
    "aria-label": "Show or hide password",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: show ? "eyeOff" : "eye",
    size: 19,
    color: "var(--muted)"
  }))), isPw && caps && /*#__PURE__*/React.createElement("div", {
    className: "caps-hint"
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: "alert",
    size: 13,
    color: "currentColor"
  }), " Caps Lock is on"), props.error && /*#__PURE__*/React.createElement("div", {
    className: "field-err"
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: "alert",
    size: 14,
    color: "var(--danger)"
  }), " ", props.error), props.showStrength && props.value && /*#__PURE__*/React.createElement(StrengthMeter, {
    value: props.value
  }), props.showStrength && props.value && /*#__PURE__*/React.createElement(PwReqs, {
    value: props.value
  }));
}
function Banner(props) {
  const map = {
    error: "alert",
    success: "checkCircle",
    info: "info"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "banner " + props.kind
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: map[props.kind],
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, props.children));
}

/* ----------------------------- brand panel ----------------------------- */
function BrandPanel(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "particles"
  }, PARTICLES.map(function (p, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        left: p.l + "%",
        width: p.s + "px",
        height: p.s + "px",
        animationDuration: p.d + "s",
        animationDelay: p.dl + "s"
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/oaks-mark.png",
    alt: "OAKS"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bl-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bl-name"
  }, "OAKS"), /*#__PURE__*/React.createElement("span", {
    className: "bl-sub"
  }, "SOLUTIONS PRIVATE LIMITED"))), /*#__PURE__*/React.createElement("div", {
    className: "brand-mid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "welcome-to"
  }, "Welcome to"), /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Oaks", /*#__PURE__*/React.createElement("span", {
    className: "blue"
  }, "Team")), /*#__PURE__*/React.createElement("div", {
    className: "uline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tagline"
  }, "Your Workplace. ", /*#__PURE__*/React.createElement("span", {
    className: "blue"
  }, "Simplified.")), /*#__PURE__*/React.createElement("div", {
    className: "lead"
  }, "Everything you need to manage your work life, all in one place."), props.showFeatures && /*#__PURE__*/React.createElement("div", {
    className: "features"
  }, FEATURES.map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      className: "feature",
      key: f.label.join(" ")
    }, /*#__PURE__*/React.createElement("div", {
      className: "tile",
      style: {
        background: f.grad
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: f.icon,
      size: 26,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      className: "flabel"
    }, f.label.map(function (l, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, l);
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "skyline"
  }));
}

/* ----------------------------- app ----------------------------- */
function App() {
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakColor,
    TweakToggle
  } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [users, setUsers] = React.useState(SEED_USERS);
  const [screen, setScreen] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState({});
  const [notice, setNotice] = React.useState(null);
  const [fEmail, setFEmail] = React.useState("");
  const [tempIssued, setTempIssued] = React.useState("");
  const [resetEmail, setResetEmail] = React.useState("");
  const [rTemp, setRTemp] = React.useState("");
  const [np1, setNp1] = React.useState("");
  const [np2, setNp2] = React.useState("");
  const [pendingEmail, setPendingEmail] = React.useState("");
  const [current, setCurrent] = React.useState(null);
  React.useEffect(function () {
    const r = document.documentElement;
    r.setAttribute("data-theme", t.theme);
    // Dark mode gets its own distinctive cyan→violet accent unless the user
    // has explicitly picked an accent in Tweaks.
    const isDefaultAccent = t.accent === TWEAK_DEFAULTS.accent;
    const acc = t.theme === "dark" && isDefaultAccent ? "#38d6ff" : t.accent;
    const acc2 = t.theme === "dark" && isDefaultAccent ? "#7c8bff" : t.accent;
    r.style.setProperty("--accent", acc);
    r.style.setProperty("--accent-2", acc2);
    r.style.setProperty("--accent-soft", hexA(acc, 0.16));
  }, [t.theme, t.accent]);
  function go(s) {
    setErr({});
    setScreen(s);
  }
  function doLogin() {
    setNotice(null);
    const e = email.trim().toLowerCase();
    if (!e) {
      setErr({
        email: "Please enter your email."
      });
      return;
    }
    if (!e.endsWith("@oaks.guru")) {
      setErr({
        email: "Only @oaks.guru accounts can sign in. Please contact the HR to get access."
      });
      return;
    }
    const u = users[e];
    if (!u) {
      setErr({
        email: "No account found for this email. Please contact the HR to create your login."
      });
      return;
    }
    if (!password) {
      setErr({
        password: "Please enter your password."
      });
      return;
    }
    if (password !== u.password) {
      setErr({
        password: "Incorrect password. Try again or reset it below."
      });
      return;
    }
    if (u.firstTime) {
      setPendingEmail(e);
      setNp1("");
      setNp2("");
      go("firstTime");
      return;
    }
    setCurrent(Object.assign({
      email: e
    }, u));
    go("success");
  }
  function doForgot() {
    const e = fEmail.trim().toLowerCase();
    if (!e.endsWith("@oaks.guru") || !users[e]) {
      setErr({
        fEmail: "We couldn't find an @oaks.guru account with that email. Please contact the HR."
      });
      return;
    }
    const temp = genTemp();
    setUsers(function (prev) {
      const n = Object.assign({}, prev);
      n[e] = Object.assign({}, n[e], {
        password: temp,
        firstTime: false
      });
      return n;
    });
    setTempIssued(temp);
    setResetEmail(e);
    setRTemp("");
    setNp1("");
    setNp2("");
    go("sent");
  }
  function doReset() {
    const u = users[resetEmail];
    if (rTemp.trim() !== u.password) {
      setErr({
        rTemp: "That temporary password doesn't match the one we emailed."
      });
      return;
    }
    if (!strongEnough(np1)) {
      setErr({
        np1: "Use 8+ chars with upper & lower case and a number."
      });
      return;
    }
    if (np1 !== np2) {
      setErr({
        np2: "Passwords don't match."
      });
      return;
    }
    setUsers(function (prev) {
      const n = Object.assign({}, prev);
      n[resetEmail] = Object.assign({}, n[resetEmail], {
        password: np1
      });
      return n;
    });
    setEmail(resetEmail);
    setPassword("");
    setNotice({
      kind: "success",
      text: "Password updated. You can sign in now."
    });
    go("login");
  }
  function doFirstTime() {
    if (!strongEnough(np1)) {
      setErr({
        np1: "Use 8+ chars with upper & lower case and a number."
      });
      return;
    }
    if (np1 !== np2) {
      setErr({
        np2: "Passwords don't match."
      });
      return;
    }
    setUsers(function (prev) {
      const n = Object.assign({}, prev);
      n[pendingEmail] = Object.assign({}, n[pendingEmail], {
        password: np1,
        firstTime: false
      });
      return n;
    });
    const u = Object.assign({}, users[pendingEmail], {
      password: np1,
      firstTime: false
    });
    setCurrent(Object.assign({
      email: pendingEmail
    }, u));
    go("success");
  }
  function logout() {
    setEmail("");
    setPassword("");
    setCurrent(null);
    setNotice(null);
    go("login");
  }
  let body;
  if (screen === "login") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Welcome back!"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "Sign in to continue to your account"), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, notice && /*#__PURE__*/React.createElement(Banner, {
      kind: notice.kind
    }, notice.text), /*#__PURE__*/React.createElement(Field, {
      label: "Email or Phone",
      type: "email",
      icon: "mail",
      placeholder: "Enter your email or phone number",
      value: email,
      onChange: function (e) {
        setEmail(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doLogin();
      },
      error: err.email,
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Password",
      type: "password",
      icon: "lock",
      placeholder: "Enter your password",
      value: password,
      onChange: function (e) {
        setPassword(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doLogin();
      },
      error: err.password
    }), /*#__PURE__*/React.createElement("div", {
      className: "row-end"
    }, /*#__PURE__*/React.createElement("button", {
      className: "link",
      onClick: function () {
        setFEmail(email);
        go("forgot");
      }
    }, "Forgot password?")), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doLogin
    }, "Sign in")));
  } else if (screen === "forgot") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("button", {
      className: "back",
      onClick: function () {
        go("login");
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "arrowLeft",
      size: 16
    }), " Back to sign in"), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Forgot password?"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "Enter your OAKS email and we'll send a temporary password to reset it."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Email",
      type: "email",
      icon: "mail",
      placeholder: "Enter your email",
      value: fEmail,
      onChange: function (e) {
        setFEmail(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doForgot();
      },
      error: err.fEmail,
      autoFocus: true
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doForgot
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "send",
      size: 18,
      color: "#fff"
    }), " Send temporary password")));
  } else if (screen === "sent") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("div", {
      className: "big-icon"
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "mail",
      size: 32,
      color: "var(--accent)"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Check your inbox"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "We've emailed a temporary password to ", /*#__PURE__*/React.createElement("b", null, resetEmail), ". Use it to set a new password."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Banner, {
      kind: "info"
    }, "Your one-time temporary password is ", /*#__PURE__*/React.createElement("code", null, tempIssued), ". Enter it on the next step to set a new password."), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: function () {
        go("reset");
      }
    }, "Reset password now"), /*#__PURE__*/React.createElement("button", {
      className: "link center",
      onClick: function () {
        go("login");
      }
    }, "Back to sign in")));
  } else if (screen === "reset") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("button", {
      className: "back",
      onClick: function () {
        go("sent");
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "arrowLeft",
      size: 16
    }), " Back"), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Set a new password"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "For ", /*#__PURE__*/React.createElement("b", null, resetEmail)), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Temporary password",
      type: "password",
      icon: "lock",
      placeholder: "Paste the password we emailed",
      value: rTemp,
      onChange: function (e) {
        setRTemp(e.target.value);
        setErr({});
      },
      error: err.rTemp,
      autoFocus: true
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "gen-pw",
      onClick: function () {
        var p = genStrong();
        setNp1(p);
        setNp2(p);
        setErr({});
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "sparkles",
      size: 14,
      color: "var(--accent)"
    }), " Generate strong password"), /*#__PURE__*/React.createElement(Field, {
      label: "New password",
      type: "password",
      icon: "lock",
      placeholder: "Create a strong password",
      value: np1,
      onChange: function (e) {
        setNp1(e.target.value);
        setErr({});
      },
      error: err.np1,
      showStrength: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Confirm new password",
      type: "password",
      icon: "lock",
      placeholder: "Re-type new password",
      value: np2,
      onChange: function (e) {
        setNp2(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doReset();
      },
      error: err.np2
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doReset
    }, "Update password")));
  } else if (screen === "firstTime") {
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("div", {
      className: "big-icon"
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "shield",
      size: 30,
      color: "var(--accent)"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "Welcome to OAKS!"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, "First time here \u2014 set a password to secure your account, ", /*#__PURE__*/React.createElement("b", null, users[pendingEmail] && users[pendingEmail].name), "."), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "gen-pw",
      onClick: function () {
        var p = genStrong();
        setNp1(p);
        setNp2(p);
        setErr({});
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "sparkles",
      size: 14,
      color: "var(--accent)"
    }), " Generate strong password"), /*#__PURE__*/React.createElement(Field, {
      label: "Create password",
      type: "password",
      icon: "lock",
      placeholder: "Create a strong password",
      value: np1,
      onChange: function (e) {
        setNp1(e.target.value);
        setErr({});
      },
      error: err.np1,
      showStrength: true,
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Confirm password",
      type: "password",
      icon: "lock",
      placeholder: "Re-type password",
      value: np2,
      onChange: function (e) {
        setNp2(e.target.value);
        setErr({});
      },
      onKeyDown: function (e) {
        if (e.key === "Enter") doFirstTime();
      },
      error: err.np2
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: doFirstTime
    }, "Set password & continue")));
  } else if (screen === "success") {
    const meta = ROLES[current.role];
    body = /*#__PURE__*/React.createElement("div", {
      className: "view"
    }, /*#__PURE__*/React.createElement("div", {
      className: "big-icon"
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "checkCircle",
      size: 32,
      color: "var(--success)"
    })), /*#__PURE__*/React.createElement("h1", {
      className: "view-title"
    }, "You're signed in"), /*#__PURE__*/React.createElement("p", {
      className: "view-sub"
    }, greeting(), ", ", current.name.split(" ")[0], " \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
      className: "view-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ok-role",
      style: {
        borderColor: meta.color,
        color: meta.color
      }
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: meta.icon,
      size: 15,
      color: meta.color
    }), " ", meta.label, " \xB7 ", current.title), /*#__PURE__*/React.createElement(Banner, {
      kind: "success"
    }, "Authenticated against your @oaks.guru credentials and routed to the ", meta.label, " workspace."), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: logout
    }, /*#__PURE__*/React.createElement(HRIcon, {
      name: "logout",
      size: 18,
      color: "#fff"
    }), " Sign out")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "stage" + (t.layout === "right" ? " rev" : "")
  }, /*#__PURE__*/React.createElement(BrandPanel, {
    showFeatures: t.showFeatures
  }), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle",
    onClick: function () {
      setTweak("theme", t.theme === "light" ? "dark" : "light");
    },
    "aria-label": "Toggle theme"
  }, /*#__PURE__*/React.createElement(HRIcon, {
    name: t.theme === "light" ? "moon" : "sun",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "mobile-head"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logos/oaks-mark.png",
    alt: "OAKS"
  })), body), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Appearance"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Theme",
    value: t.theme,
    options: ["light", "dark"],
    onChange: function (v) {
      setTweak("theme", v);
    }
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ["#1b6ef3", "#0795c9", "#2f86ff", "#6d5cff"],
    onChange: function (v) {
      setTweak("accent", v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Layout"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Brand side",
    value: t.layout,
    options: ["left", "right"],
    onChange: function (v) {
      setTweak("layout", v);
    }
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Feature tiles",
    value: t.showFeatures,
    onChange: function (v) {
      setTweak("showFeatures", v);
    }
  })));
}
window.HRApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "hr_portal/auth.jsx", error: String((e && e.message) || e) }); }

// hr_portal/icons.jsx
try { (() => {
// OaksTeam HR Portal icon set — official set (24x24, 2px stroke, round caps). No import/export.
// Mirrors components/core/Icon.jsx; exposed as window.HRIcon for the non-bundled auth app.
(function () {
  var P = {
    // ── Employee Management ──
    employees: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
    addEmployee: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M19 8v6', 'M22 11h-6'],
    employeeProfile: ['M18 20a6 6 0 0 0-12 0', 'M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
    employeeDirectory: ['M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', 'M4 17.5A2.5 2.5 0 0 1 6.5 15H20', 'M12 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4z', 'M9 13.5a3 3 0 0 1 6 0'],
    orgChart: ['M9 3h6v4H9z', 'M3 17h6v4H3z', 'M15 17h6v4h-6z', 'M12 7v6', 'M6 13h12', 'M6 13v4', 'M18 13v4'],
    teams: ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M3 21v-2a6 6 0 0 1 12 0v2', 'M16 3.5a4 4 0 0 1 0 7', 'M21 21v-2a6 6 0 0 0-4-5.6'],
    rolesPermissions: ['M4 6h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z', 'M9 4h6v2H9z', 'M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M5.5 17a2.5 2.5 0 0 1 5 0', 'M14 11h4', 'M14 14h3'],
    // ── Dashboard & Overview ──
    dashboard: ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],
    analytics: ['M3 3v18h18', 'M7 15v-4', 'M12 15V8', 'M17 15v-6'],
    reports: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M8 17v-3', 'M12 17v-5', 'M16 17v-2'],
    notifications: ['M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'],
    calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
    announcements: ['m3 11 18-5v12L3 14v-3z', 'M11.6 16.8a3 3 0 1 1-5.8-1.6', 'M3 11v3'],
    // ── Attendance & Time ──
    attendance: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm9 16 2 2 4-4'],
    checkIn: ['M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4', 'M10 17l5-5-5-5', 'M15 12H3'],
    checkOut: ['M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
    attendanceSheet: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M9 13h6', 'M9 17h6', 'M9 9h1'],
    timesheet: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3 2'],
    workFromHome: ['M3 10.5 12 3l9 7.5', 'M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5', 'M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M9 18a3 3 0 0 1 6 0'],
    overtime: ['M10 2h4', 'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M12 14v-4', 'M16.5 6.5 18 5'],
    // ── Leave Management ──
    applyLeave: ['M5 5l14 14', 'M19 5 5 19', 'M5 9V5h4', 'M15 5h4v4'],
    myLeaves: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M15 2v5h5', 'M9 13h6', 'M9 17h4'],
    leaveBalance: ['M21.21 15.89A10 10 0 1 1 8 2.83', 'M22 12A10 10 0 0 0 12 2v10z'],
    leaveCalendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M12 15h.01'],
    leaveApproval: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'm9 14 2 2 4-4'],
    holidays: ['M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2.5', 'M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3', 'M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z', 'M11 15.5c.5 2.5-.17 4.5-1 6.5h9c2-5.5-.5-12-1-14'],
    leavePolicy: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'm9 12 2 2 4-4'],
    // ── Payroll & Compensation ──
    payroll: ['M3 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2', 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5', 'M16 13h2'],
    payslip: ['M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z', 'M8 8h8', 'M8 12h6', 'M8 16h4'],
    salaryStructure: ['M5 6c0-1.66 3.13-3 7-3s7 1.34 7 3-3.13 3-7 3-7-1.34-7-3z', 'M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6', 'M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6'],
    taxInformation: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M15 13l-6 6', 'M9.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z', 'M14.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z'],
    reimbursements: ['M12 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M12 5v4', 'M13 6.2a1.2 1.2 0 0 0-2.2.5c0 1.4 2.4.5 2.4 2a1.2 1.2 0 0 1-2.2.5', 'M3 15.5l3.2-1a2 2 0 0 1 .6-.1H11a1.5 1.5 0 0 1 0 3H8', 'M3 14v7', 'M6.5 21l4.5.9 7.4-2.7a1.7 1.7 0 0 0-1.3-3.1l-3.1 1.1'],
    loans: ['M16 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M16 4v4', 'M17 5.2a1.2 1.2 0 0 0-2.2.5c0 1.4 2.4.5 2.4 2a1.2 1.2 0 0 1-2.2.5', 'M3 16l3.2-1a2 2 0 0 1 .6-.1H11a1.5 1.5 0 0 1 0 3H8', 'M3 14.5v6.5', 'M6.5 21l4.5.9 7.4-2.7a1.7 1.7 0 0 0-1.3-3.1'],
    salaryAdvance: ['M3 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2', 'M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5', 'M14.5 12.5 17 10l2.5 2.5', 'M17 10v6'],
    // ── Performance Management ──
    goals: ['M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M12 14l8-8', 'M16 4h4v4'],
    performanceReview: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'M12 10l1.1 2.2 2.4.3-1.7 1.7.4 2.4-2.2-1.1-2.2 1.1.4-2.4-1.7-1.7 2.4-.3z'],
    kpis: ['m12 14 4-4', 'M3.34 19a10 10 0 1 1 17.32 0', 'M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
    feedback: ['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z', 'M8 12h.01', 'M12 12h.01', 'M16 12h.01'],
    appraisals: ['M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'],
    skills: ['M9.5 2a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 4.5 7 2.5 2.5 0 0 0 4 11.9 2.5 2.5 0 0 0 6 16.5 2.5 2.5 0 0 0 9.5 19 2.5 2.5 0 0 0 12 16.5V4.5A2.5 2.5 0 0 0 9.5 2z', 'M14.5 2a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19.5 7 2.5 2.5 0 0 1 20 11.9 2.5 2.5 0 0 1 18 16.5 2.5 2.5 0 0 1 14.5 19 2.5 2.5 0 0 1 12 16.5'],
    careerDevelopment: ['M3 21h4v-3h4v-3h4v-3h4', 'M18 12V4', 'M18 4l3 1.2L18 6.6'],
    // ── Recruitment ──
    jobOpenings: ['M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', 'M4 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z', 'M2 13h20'],
    candidates: ['M14 19a5 5 0 0 0-10 0', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M16 3.5a4 4 0 0 1 0 7', 'M16 13.5a5 5 0 0 1 4 5'],
    interviews: ['M13 19a5 5 0 0 0-10 0', 'M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M14 13.5l5-5 2.5 2.5-5 5H14z', 'M19 8.5l1 1'],
    offerLetter: ['M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'm3 7 9 6 9-6', 'm8.5 13 2.5 2.5 4-4'],
    onboarding: ['m11 17 2 2a1 1 0 1 0 3-3', 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4', 'm21 3 1 11h-2', 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3', 'M3 4h8'],
    taskManagement: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'm8.5 12 1.5 1.5 2.5-2.5', 'M14 11.5h3', 'm8.5 17 1.5 1.5 2.5-2.5', 'M14 16.5h3'],
    // ── Documents & Files ──
    documents: ['M4 4h6l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'],
    myFiles: ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M6.5 16a2.5 2.5 0 0 1 5 0', 'M15 8h3', 'M15 12h3', 'M8 19h8'],
    templates: ['M4 4h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z', 'M4 12h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z', 'M16 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z'],
    companyPolicies: ['M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', 'M4 17.5A2.5 2.5 0 0 1 6.5 15H20', 'M10 2v7l2-1.3L14 9V2'],
    eSignature: ['M3 17c2 0 2.5-7 4-7s1.5 7 3.5 7 2-9 3.5-9 1 6 3 6', 'M3 21h18'],
    download: ['M12 4v11', 'M8 11l4 4 4-4', 'M5 20h14'],
    upload: ['M12 20V9', 'M8 13l4-4 4 4', 'M5 5h14'],
    // ── Other Essentials ──
    inbox: ['M22 12h-6l-2 3h-4l-2-3H2', 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'],
    tasks: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'm8 12 3 3 5-6'],
    reminders: ['M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.73 21a2 2 0 0 1-3.46 0'],
    helpCenter: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3', 'M12 17h.01'],
    settings: ['M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    support: ['M5 13a7 7 0 0 1 14 0', 'M3 14a2 2 0 0 1 2-2h1v6H5a2 2 0 0 1-2-2v-2z', 'M21 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2z', 'M18 18v1a3 3 0 0 1-3 3h-3'],
    logout: ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
    // ── Legacy aliases (auth + learning app) ──
    mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm22 7-10 5L2 7'],
    lock: ['M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
    eye: ['M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
    eyeOff: ['M9.88 9.88a3 3 0 1 0 4.24 4.24', 'M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68', 'M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61', 'm2 2 20 20'],
    sun: ['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', 'M12 1v2', 'M12 21v2', 'M4.22 4.22l1.42 1.42', 'M18.36 18.36l1.42 1.42', 'M1 12h2', 'M21 12h2', 'M4.22 19.78l1.42-1.42', 'M18.36 5.64l1.42-1.42'],
    moon: ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z'],
    arrowLeft: ['M19 12H5', 'M12 19l-7-7 7-7'],
    arrowRight: ['M5 12h14', 'm12 5 7 7-7 7'],
    check: ['M20 6 9 17l-5-5'],
    checkCircle: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'm9 12 2 2 4-4'],
    alert: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 8v4', 'M12 16h.01'],
    info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 16v-4', 'M12 8h.01'],
    shield: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'],
    crown: ['M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z', 'M5 21h14'],
    user: ['M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'],
    send: ['M22 2 11 13', 'M22 2 15 22l-4-9-9-4z'],
    sparkles: ['M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z', 'M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8z'],
    chart: ['M3 3v16a2 2 0 0 0 2 2h16', 'M18 17V9', 'M13 17V5', 'M8 17v-3'],
    copy: ['M9 9h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
    file: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6'],
    globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
    chevronDown: ['m6 9 6 6 6-6'],
    growth: ['M3 3v16a2 2 0 0 0 2 2h16', 'M7 14l3-3 3 3 5-5', 'M18 9h-3', 'M18 9v3'],
    zap: ['M13 2 3 14h9l-1 8 10-12h-9l1-8z']
  };
  var ALIASES = {
    users: 'employees',
    userPlus: 'addEmployee',
    briefcase: 'jobOpenings',
    clock: 'timesheet',
    wallet: 'payroll'
  };
  Object.keys(ALIASES).forEach(function (k) {
    P[k] = P[ALIASES[k]];
  });
  function HRIcon(props) {
    var name = props.name,
      size = props.size || 22,
      color = props.color || "currentColor",
      sw = props.strokeWidth || 2,
      style = props.style || {};
    var paths = P[name];
    if (!paths) return null;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: Object.assign({
        display: "block",
        flexShrink: 0
      }, style)
    }, paths.map(function (d, i) {
      return React.createElement("path", {
        key: i,
        d: d
      });
    }));
  }
  HRIcon.NAMES = Object.keys(P);
  window.HRIcon = HRIcon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "hr_portal/icons.jsx", error: String((e && e.message) || e) }); }

// hr_portal/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "hr_portal/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning_app/AppSidebar.jsx
try { (() => {
function AppSidebar({
  active = "home",
  onNav
}) {
  const Icon = window.OAKSDesignSystem_54b38e.Icon || window.OAKSLearningIcon;
  const items = [{
    icon: "home",
    label: "Dashboard",
    value: "home"
  }, {
    icon: "book",
    label: "My Courses",
    value: "courses"
  }, {
    icon: "target",
    label: "Practice",
    value: "practice"
  }, {
    icon: "chart",
    label: "Progress",
    value: "progress"
  }, {
    icon: "award",
    label: "Rewards",
    value: "rewards"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: "var(--navy-900)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "22px 16px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 8px 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/oaks-mark.png",
    alt: "OAKS",
    style: {
      width: 36
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 20,
      letterSpacing: "-0.01em"
    }
  }, "OAKS")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, items.map(it => {
    const isActive = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onNav && onNav(it.value),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        border: "none",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: "var(--fw-bold)",
        textAlign: "left",
        color: isActive ? "#fff" : "var(--navy-200)",
        background: isActive ? "var(--blue-500)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 20
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "rgba(7,149,201,0.16)",
      borderRadius: "var(--radius-lg)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--amber-400)",
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 18,
    color: "var(--amber-400)"
  }), " 7-day streak"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--navy-200)",
      marginTop: 6
    }
  }, "Keep it up \u2014 1 lesson to go today!")));
}
Object.assign(__ds_scope, { AppSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning_app/AppSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning_app/Dashboard.jsx
try { (() => {
const COURSES = [{
  subject: "Science",
  title: "Light & Reflection",
  lessons: "8 / 12 lessons",
  pct: 67,
  accent: "var(--blue-500)",
  level: "Grade 8"
}, {
  subject: "Mathematics",
  title: "Linear Equations",
  lessons: "5 / 10 lessons",
  pct: 50,
  accent: "var(--teal-500)",
  level: "Grade 8"
}, {
  subject: "NEET Biology",
  title: "Human Physiology",
  lessons: "14 / 20 lessons",
  pct: 70,
  accent: "var(--coral-500)",
  level: "Foundation"
}];
function Dashboard({
  onOpenLesson
}) {
  const {
    Card,
    Badge,
    ProgressBar,
    StatTile,
    Button,
    Avatar
  } = window.OAKSDesignSystem_54b38e;
  const Icon = window.OAKSDesignSystem_54b38e.Icon || window.OAKSLearningIcon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "18px 32px",
      background: "#fff",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flex: 1,
      maxWidth: 380,
      background: "var(--slate-100)",
      borderRadius: "var(--radius-pill)",
      padding: "10px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      fontSize: 14
    }
  }, "Search lessons, topics\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 22,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Aarav Sharma",
    size: 40
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32
    }
  }, "Good morning, Aarav \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, "You're on a 7-day streak. Finish today's lesson to keep it alive."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "1,280",
    label: "Total XP",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 20,
      color: "var(--amber-500)"
    }),
    accent: "var(--amber-500)",
    trend: "+120"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "7",
    label: "Day streak",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "flame",
      size: 20,
      color: "var(--coral-500)"
    }),
    accent: "var(--coral-500)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "68%",
    label: "Avg. mastery",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "target",
      size: 20,
      color: "var(--blue-500)"
    }),
    accent: "var(--blue-500)",
    trend: "+4%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "12",
    label: "Badges earned",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "award",
      size: 20,
      color: "var(--teal-500)"
    }),
    accent: "var(--teal-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginTop: 36,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22
    }
  }, "Continue learning"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginLeft: "auto",
      fontWeight: 700,
      fontSize: 14
    }
  }, "View all courses \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, COURSES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    interactive: true,
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 92,
      background: `linear-gradient(135deg, ${c.accent}, var(--navy-700))`,
      display: "flex",
      alignItems: "flex-end",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    style: {
      background: "rgba(255,255,255,0.9)"
    }
  }, c.level)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: c.accent,
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, c.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--text-strong)",
      marginTop: 4
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      margin: "10px 0 12px"
    }
  }, c.lessons), /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.pct,
    color: c.accent
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    fullWidth: true,
    style: {
      marginTop: 16
    },
    onClick: onOpenLesson,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: "#fff"
    })
  }, "Continue")))))));
}
Object.assign(__ds_scope, { Dashboard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning_app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning_app/Icons.jsx
try { (() => {
// Icons derived from Lucide (lucide.dev, ISC license) — 24×24, 2px stroke, round caps.
// OAKS standard icon system. Pass size/color/strokeWidth as props.
const P = {
  home: ["M3 9.5 12 3l9 6.5", "M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"],
  book: ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"],
  trophy: ["M6 9H4.5a2.5 2.5 0 0 1 0-5H6", "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", "M4 22h16", "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", "M18 2H6v7a6 6 0 0 0 12 0V2z"],
  flame: ["M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"],
  chart: ["M3 3v16a2 2 0 0 0 2 2h16", "M18 17V9", "M13 17V5", "M8 17v-3"],
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  play: ["M6 3l14 9-14 9V3z"],
  check: ["M20 6 9 17l-5-5"],
  bell: ["M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", "M10.3 21a1.94 1.94 0 0 0 3.4 0"],
  search: ["M21 21l-4.35-4.35", "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"],
  settings: ["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"],
  award: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M8.21 13.89 7 23l5-3 5 3-1.21-9.12"],
  target: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z", "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
  arrowRight: ["M5 12h14", "m12 5 7 7-7 7"],
  zap: ["M13 2 3 14h9l-1 8 10-12h-9l1-8z"],
  mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m22 7-10 5L2 7"],
  lock: ["M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z", "M7 11V7a5 5 0 0 1 10 0v4"]
};
function LearningIcon({
  name,
  size = 22,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) {
  const paths = P[name];
  if (!paths) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}

// Legacy fallback only — the official set is OAKSDesignSystem_54b38e.Icon (components/core/Icon.jsx).
window.OAKSLearningIcon = LearningIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning_app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning_app/LoginScreen.jsx
try { (() => {
function LoginScreen({
  onLogin
}) {
  const {
    Button,
    Input
  } = window.OAKSDesignSystem_54b38e;
  const Icon = window.OAKSDesignSystem_54b38e.Icon || window.OAKSLearningIcon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 46%",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(150deg, var(--navy-900), var(--blue-800))",
      color: "#fff",
      padding: 56,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -100,
      left: -60,
      width: 420,
      height: 420,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(7,149,201,0.4), transparent 65%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/oaks-logo-white.png",
    alt: "OAKS",
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      color: "#fff",
      lineHeight: 1.12,
      marginTop: 36,
      maxWidth: 420
    }
  }, "Welcome to Your Workplace Hub"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--navy-100)",
      marginTop: 18,
      maxWidth: 400,
      lineHeight: 1.6
    }
  }, "Everything you need to manage your work life, all in one place."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 54%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40,
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email or phone",
    placeholder: "aarav@school.edu",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16,
      color: "var(--text-muted)"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16,
      color: "var(--text-muted)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onLogin
  }, "Sign in")))));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning_app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning_app/QuizScreen.jsx
try { (() => {
const QUESTION = {
  subject: "Science · Light & Reflection",
  q: "When a ray of light passes from air into a denser medium like water, it bends —",
  options: [{
    id: "a",
    text: "Away from the normal"
  }, {
    id: "b",
    text: "Towards the normal"
  }, {
    id: "c",
    text: "Along the normal"
  }, {
    id: "d",
    text: "It does not bend at all"
  }],
  correct: "b"
};
function QuizScreen({
  onBack
}) {
  const {
    Button,
    Badge,
    ProgressBar
  } = window.OAKSDesignSystem_54b38e;
  const Icon = window.OAKSDesignSystem_54b38e.Icon || window.OAKSLearningIcon;
  const [picked, setPicked] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const isCorrect = picked === QUESTION.correct;
  function optionStyle(o) {
    const base = {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 18px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-default)",
      background: "#fff",
      cursor: "pointer",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--text-strong)",
      transition: "all var(--dur-fast) var(--ease-out)"
    };
    if (!checked) {
      if (picked === o.id) return {
        ...base,
        borderColor: "var(--blue-500)",
        background: "var(--blue-50)"
      };
      return base;
    }
    if (o.id === QUESTION.correct) return {
      ...base,
      borderColor: "var(--green-500)",
      background: "var(--green-100)",
      color: "var(--green-600)"
    };
    if (o.id === picked) return {
      ...base,
      borderColor: "var(--red-500)",
      background: "var(--red-100)",
      color: "var(--red-600)"
    };
    return {
      ...base,
      opacity: 0.6
    };
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "18px 32px",
      background: "#fff",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "var(--slate-100)",
      borderRadius: "var(--radius-pill)",
      padding: "8px 16px",
      cursor: "pointer",
      fontWeight: 700,
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)"
    }
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 4,
    max: 6,
    height: 8
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-muted)"
    }
  }, "Question 4 of 6"), /*#__PURE__*/React.createElement(Badge, {
    variant: "reward"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 13,
    color: "var(--amber-600)"
  }), " +10 XP")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "40px 28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oaks-eyebrow"
  }, QUESTION.subject), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginTop: 12,
      lineHeight: 1.3
    }
  }, QUESTION.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 28
    }
  }, QUESTION.options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: optionStyle(o),
    onClick: () => !checked && setPicked(o.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "var(--radius-circle)",
      border: "1.5px solid currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      flexShrink: 0
    }
  }, o.id.toUpperCase()), o.text, checked && o.id === QUESTION.correct && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22,
    color: "var(--green-600)"
  }))))), checked && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: 18,
      borderRadius: "var(--radius-md)",
      background: isCorrect ? "var(--green-100)" : "var(--red-100)",
      color: isCorrect ? "var(--green-600)" : "var(--red-600)",
      fontWeight: 700
    }
  }, isCorrect ? "Correct! Light bends towards the normal entering a denser medium." : "Not quite — light bends towards the normal in a denser medium."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 28
    }
  }, !checked ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !picked,
    onClick: () => setChecked(true)
  }, "Check answer") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => {
      setChecked(false);
      setPicked(null);
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18,
      color: "#fff"
    })
  }, "Next question"))));
}
Object.assign(__ds_scope, { QuizScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning_app/QuizScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Badge
  } = window.OAKSDesignSystem_54b38e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 55%, var(--blue-800) 100%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -120,
      right: -80,
      width: 480,
      height: 480,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(7,149,201,0.45), transparent 65%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "84px 28px 96px",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(7,149,201,0.18)",
      color: "var(--blue-200)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }
  }, "\u25CF Online Adaptive Knowledge System"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 60,
      fontWeight: 900,
      lineHeight: 1.04,
      letterSpacing: "-0.025em",
      margin: "22px 0 0",
      color: "#fff"
    }
  }, "Transforming education for ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue-300)"
    }
  }, "every learner"), " in India"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: "var(--navy-100)",
      margin: "22px 0 0",
      maxWidth: 560
    }
  }, "AI-driven assessments, gamified FLN programs, and hybrid NEET & IIT\xA0JEE coaching \u2014 trusted by 10\xA0lakh+ students across five states."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Explore solutions"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.5)"
    }
  }, "Watch impact \u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 44
    }
  }, [["10L+", "Students reached"], ["5", "States"], ["7+", "Years of impact"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 900,
      color: "#fff",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--navy-200)",
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(7,149,201,0.35), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/oaks-mark.png",
    alt: "OAKS",
    style: {
      width: 240,
      position: "relative",
      filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.4))"
    }
  })))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ImpactBand.jsx
try { (() => {
function ImpactBand() {
  const {
    StatTile
  } = window.OAKSDesignSystem_54b38e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      padding: "84px 28px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "oaks-eyebrow"
  }, "OUR IMPACT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      marginTop: 12
    }
  }, "Democratizing quality education at scale"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-body)",
      marginTop: 16,
      lineHeight: 1.65
    }
  }, "During the pandemic, OAKS partnered with the Government of Telangana to bring live classes and curated video lessons to students across residential schools \u2014 bridging the digital divide in rural areas."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-body)",
      marginTop: 14,
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "Project Titli"), " now equips 55,000+ young learners in Jharkhand with tablet-based foundational literacy & numeracy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "10L+",
    label: "Students reached",
    accent: "var(--blue-500)",
    trend: "+18%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "55,000",
    label: "Project Titli learners",
    accent: "var(--coral-500)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "5",
    label: "States served",
    accent: "var(--teal-500)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "ISO",
    label: "27001 \xB7 9001 certified",
    accent: "var(--amber-500)"
  })))));
}
function SiteFooter() {
  const cols = [["Solutions", ["AI Assessments", "Gamified FLN", "NEET & JEE", "Skill Development"]], ["Company", ["About us", "Our team", "Impact", "Careers"]], ["Resources", ["Blog", "FAQs", "Case studies", "Contact"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      color: "var(--navy-100)",
      padding: "56px 28px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/oaks-logo-white.png",
    alt: "OAKS",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      marginTop: 16,
      color: "var(--navy-200)",
      maxWidth: 280,
      lineHeight: 1.6
    }
  }, "India's leading EdTech company \u2014 making learning accessible, engaging, and future-ready."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      marginTop: 16,
      color: "var(--navy-300)"
    }
  }, "Hyderabad, Telangana \xB7 info@oaks.guru")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#fff",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 14,
      color: "var(--navy-200)",
      padding: "5px 0",
      cursor: "pointer"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "32px auto 0",
      paddingTop: 22,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13,
      color: "var(--navy-300)"
    }
  }, "\xA9 2026 OAKS Solutions Pvt Ltd. All rights reserved."));
}
Object.assign(__ds_scope, { ImpactBand, SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ImpactBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteNav.jsx
try { (() => {
function SiteNav({
  active = "home",
  onNav
}) {
  const links = [{
    label: "Home",
    value: "home"
  }, {
    label: "Solutions",
    value: "solutions"
  }, {
    label: "Impact",
    value: "impact"
  }, {
    label: "Blog",
    value: "blog"
  }, {
    label: "About",
    value: "about"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,255,255,0.88)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 28px",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/oaks-logo.png",
    alt: "OAKS Solutions",
    style: {
      height: 36
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 12
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.value,
    onClick: () => onNav && onNav(l.value),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: "var(--fw-bold)",
      color: active === l.value ? "var(--color-brand)" : "var(--text-body)",
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(window.OAKSDesignSystem_54b38e.Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(window.OAKSDesignSystem_54b38e.Button, {
    variant: "primary",
    size: "sm"
  }, "Book a demo"))));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SolutionsGrid.jsx
try { (() => {
const SOLUTIONS = [{
  tag: "AI Assessments",
  title: "AI-driven assessments",
  body: "Handwriting recognition, adaptive question banks, and real-time analytics that pinpoint every learning gap.",
  accent: "var(--blue-500)"
}, {
  tag: "Gamified FLN",
  title: "Gamified learning",
  body: "Foundational literacy & numeracy turned into play — streaks, badges, and rewards that keep young learners coming back.",
  accent: "var(--amber-500)"
}, {
  tag: "Hybrid Coaching",
  title: "NEET & IIT JEE prep",
  body: "Hybrid live + recorded coaching with mentor support, mock tests, and performance tracking.",
  accent: "var(--coral-500)"
}, {
  tag: "Personalized",
  title: "Adaptive learning",
  body: "Every path adjusts to the learner's pace — from KG to PG, mastery before moving on.",
  accent: "var(--teal-500)"
}, {
  tag: "Skill Dev",
  title: "Future-ready skills",
  body: "AI, IoT, and cybersecurity modules that bridge classroom learning and industry readiness.",
  accent: "var(--navy-500)"
}, {
  tag: "For Institutions",
  title: "Schools & governments",
  body: "Whole-system deployments for schools, NGOs, and state education departments at scale.",
  accent: "var(--blue-700)"
}];
function SolutionsGrid() {
  const {
    Card,
    Badge
  } = window.OAKSDesignSystem_54b38e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "88px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 640,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oaks-eyebrow"
  }, "WHAT WE DO"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      marginTop: 12
    }
  }, "One platform, every stage of learning"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--text-muted)",
      marginTop: 14
    }
  }, "From early foundational skills to competitive exam coaching \u2014 OAKS meets learners where they are.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22
    }
  }, SOLUTIONS.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true,
    accent: s.accent,
    padding: 26
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand",
    size: "sm"
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginTop: 16
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      marginTop: 10,
      lineHeight: 1.6
    }
  }, s.body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-block",
      marginTop: 16,
      fontWeight: 700,
      fontSize: 14
    }
  }, "Learn more \u2192"))))));
}
Object.assign(__ds_scope, { SolutionsGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SolutionsGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AppSidebar = __ds_scope.AppSidebar;

__ds_ns.Dashboard = __ds_scope.Dashboard;

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.QuizScreen = __ds_scope.QuizScreen;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.ImpactBand = __ds_scope.ImpactBand;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

__ds_ns.SolutionsGrid = __ds_scope.SolutionsGrid;

})();
