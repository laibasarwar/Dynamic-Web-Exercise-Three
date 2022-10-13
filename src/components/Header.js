import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div class="header">
          <div class="header-content">
            <a href="/?city=Bogota">Bogota</a>
            <a href="/?city=Madrid">Madrid</a>
            <a href="/?city=Tokyo">Tokyo</a>
            <a href="/?city=Seoul">Seoul</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
