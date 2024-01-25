import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HeadingWithDivider from "@site/src/components/HeadingWithDivider";
import { FcCheckmark } from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { TaInput } from "@opentf/react-ta-input";
import { useRef } from "react";
import { useEffect } from "react";

function HomepageHeader() {
  const inputRef = useRef();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <TaInput inputRef={inputRef} onChange={(v) => console.log(v)} kbd>
          <textarea ref={inputRef} rows={5} cols={50} />
        </TaInput>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Getting Started{" "}
            <FcRight style={{ fontSize: "26px", marginLeft: "8px" }} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main style={{ padding: "25px" }}>
        <HeadingWithDivider title="FEATURES" />
        <div className={styles.features}>
          <ul>
            <li>
              <FcCheckmark style={{ fontSize: "24px", marginRight: "8px" }} />{" "}
              Simple API
            </li>
            <li>
              <FcCheckmark style={{ fontSize: "24px", marginRight: "8px" }} />{" "}
              It is based on the&nbsp;
              <Link href="https://github.com/Open-Tech-Foundation/ta-input-spec">
                ta-input-spec
              </Link>
              &nbsp;specification
            </li>
            <li>
              <FcCheckmark style={{ fontSize: "24px", marginRight: "8px" }} />{" "}
              Virtual Keyboard
            </li>
            <li>
              <FcCheckmark style={{ fontSize: "24px", marginRight: "8px" }} />{" "}
              Easy switch between &nbsp;<strong>ta</strong>&nbsp;&&nbsp;
              <strong>System</strong>&nbsp;input methods
            </li>
          </ul>
        </div>
        <HeadingWithDivider title="Upcoming" />
        <ul>
          <li>Drag virtual keyboard</li>
          <li>Virtual Keyboard size variants</li>
          <li>Option to pick various signs</li>
          <li>Keyboard shortcut to change input language</li>
        </ul>
      </main>
    </Layout>
  );
}
