import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiCaddy,
  SiConsul,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiKeycloak,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSwagger,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

/**
 * Technology names as they appear in the résumé data, mapped to a mark.
 *
 * `color` is the brand's own hex. A few marks are black or white by brand —
 * Next.js, Express, Terraform's wordmark — and painting those in a fixed
 * colour makes them vanish in one theme or the other, so they carry null and
 * inherit the text colour instead.
 *
 * Anything not listed here still renders: the chip falls back to the label on
 * its own, which is what every tag looked like before. That matters because
 * the list is written by hand and "microservices" is never getting a logo.
 */
export interface TechMark {
  label: string;
  Icon: IconType;
  /** null means "follow the theme", for marks that are black or white. */
  color: string | null;
}

const REGISTRY: Record<string, TechMark> = {
  nextdotjs: { label: "Next.js", Icon: SiNextdotjs, color: null },
  react: { label: "React", Icon: SiReact, color: "#61DAFB" },
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  tailwindcss: { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  php: { label: "PHP", Icon: SiPhp, color: "#777BB4" },
  laravel: { label: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  mysql: { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  postgresql: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  redis: { label: "Redis", Icon: SiRedis, color: "#FF4438" },
  rabbitmq: { label: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
  consul: { label: "Consul", Icon: SiConsul, color: "#F24C53" },
  nodedotjs: { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  express: { label: "Express", Icon: SiExpress, color: null },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  terraform: { label: "Terraform", Icon: SiTerraform, color: "#844FBA" },
  oracle: { label: "Oracle Cloud", Icon: SiOracle, color: "#F80000" },
  githubactions: { label: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  keycloak: { label: "Keycloak", Icon: SiKeycloak, color: "#4D4D4D" },
  caddy: { label: "Caddy", Icon: SiCaddy, color: "#1F88C0" },
  swagger: { label: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
  firebase: { label: "Firebase", Icon: SiFirebase, color: "#DD2C00" },
  android: { label: "Android", Icon: SiAndroid, color: "#34A853" },
  java: { label: "Java", Icon: FaJava, color: "#EA2D2E" },
};

/**
 * "Next.js", "NextJs" and "next js" are the same technology written three ways,
 * and the data has all three habits in it. Fold to letters and digits, then
 * resolve the aliases people actually type.
 */
const ALIASES: Record<string, string> = {
  nextjs: "nextdotjs",
  next: "nextdotjs",
  reactjs: "react",
  nodejs: "nodedotjs",
  node: "nodedotjs",
  expressjs: "express",
  php83: "php",
  lumen: "laravel",
  dockercompose: "docker",
  oraclecloud: "oracle",
  oci: "oracle",
  githubaction: "githubactions",
  tailwind: "tailwindcss",
};

export function techMark(name: string): TechMark | null {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const resolved = ALIASES[key] ?? key;
  return REGISTRY[resolved] ?? REGISTRY[resolved.replace(/[0-9]+$/, "")] ?? null;
}
