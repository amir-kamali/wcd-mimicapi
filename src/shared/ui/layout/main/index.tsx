/* @jsx h */
import { h, Component, State, Host } from "@stencil/core";

@Component({
  tag: "main-layout",
  styleUrl: "./index.scss",
  shadow: true,
})
export class MainLayout {
  @State() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return (
      <Host>
        <header class="header">
          <div class="header-left">
            <h1>Logo</h1>
          </div>
          <div class="header-right">
            <div class="account">
              <h2>User Name</h2>
              <button>Log Out</button>
            </div>
          </div>
        </header>
        <main class="main-content">
          <grid-layout columns="1fr 1fr" row="1fr">
            <div class="content-left">
              <h2>Content Left</h2>
            </div>
            <div class="content-right">
              <h2>Content Right</h2>
            </div>
          </grid-layout>
        </main>
      </Host>
    );
  }
}