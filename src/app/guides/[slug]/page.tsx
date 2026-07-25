import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideFaqs, guideVideoReferences, guides } from "@/data/guides";
import { metadataForEntry } from "@/seo/pageSeo";
import { guidePageSchema, JsonLd } from "@/seo/structuredData";
import { formatDisplayDate } from "@/utils/date";
import styles from "./page.module.css";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.addressBar }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.addressBar === slug);
  if (!guide) return {};

  return metadataForEntry(
    guide.tdk,
    `/guides/${guide.addressBar}`,
    "article",
  );
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides.find((item) => item.addressBar === slug);
  if (!guide) notFound();
  const faqs = guideFaqs[guide.addressBar] ?? [];
  const videoReferences = guideVideoReferences[guide.addressBar] ?? [];
  const schema = guidePageSchema({
    path: `/guides/${guide.addressBar}`,
    title: guide.title,
    description: guide.tdk.description,
    imageUrl: guide.imageUrl,
    faqs,
    datePublished: guide.publishDate,
    dateModified: guide.lastVerified,
  });

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <article>
        <header className={styles.articleHeader}>
          <div className={`container ${styles.headerGrid}`}>
            <div>
              <p className={styles.breadcrumb}>
                <Link href="/guides">Guides</Link> / {guide.stage}
              </p>
              <h1>{guide.title}</h1>
              <p className={styles.dek}>{guide.summary}</p>
              <dl className={styles.articleMeta}>
                <div><dt>Stage</dt><dd>{guide.stage}</dd></div>
                <div><dt>Reading time</dt><dd>{guide.readTime}</dd></div>
                <div>
                  <dt>Updated</dt>
                  <dd>{formatDisplayDate(guide.lastVerified)}</dd>
                </div>
              </dl>
            </div>
            <figure>
              <Image
                src={guide.imageUrl}
                alt={guide.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 43vw"
              />
            </figure>
          </div>
        </header>

        <div className={`container ${styles.readingGrid}`}>
          <aside className={styles.toc}>
            <p>On this page</p>
            <ol>
              {guide.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          <div className={styles.articleBody}>
            <section className={styles.coreAnswer}>
              <p className={styles.sectionLabel}>Core answer</p>
              <p>{guide.detailsHtml.replace(/<\/?p>/g, "")}</p>
            </section>
            {guide.sections.map((section, index) => (
              <section
                className={styles.guideChapter}
                id={`section-${index + 1}`}
                key={section.heading}
              >
                <div className={styles.chapterNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                  {section.steps && (
                    <ol className={styles.stepList}>
                      {section.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  )}
                  {section.note && (
                    <aside className={styles.guideNote}>
                      <strong>Check point</strong>
                      <p>{section.note}</p>
                    </aside>
                  )}
                </div>
              </section>
            ))}

            {faqs.length > 0 && (
              <section className={styles.faqSection}>
                <p className={styles.sectionLabel}>Quick checks</p>
                <h2>Frequently asked questions</h2>
                <div>
                  {faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {videoReferences.length > 0 && (
              <section className={styles.videoSection}>
                <p className={styles.sectionLabel}>See the system in motion</p>
                <h2>Visual walkthroughs</h2>
                <div className={styles.videoGrid}>
                  {videoReferences.map((video) => (
                    <article key={video.title}>
                      <Image
                        src={video.imageUrl}
                        alt={video.imageAlt}
                        width={640}
                        height={360}
                        loading="lazy"
                      />
                      <div>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className={styles.relatedSection}>
              <p className={styles.sectionLabel}>Continue the route</p>
              <h2>Related hololive Dreams pages</h2>
              <div>
                {guide.related.map((item) => (
                  <Link href={item.href} key={item.href}>{item.label}</Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
