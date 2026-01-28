/*
 * Design Philosophy: "Cupertino Elegance"
 * Hero Section: Full-width centered layout with large typography
 * - White background
 * - Large product title, subheadline, and CTAs
 * - Optional image support
 * - Scroll-triggered animations
 */

import ScrollAnimation from "./ScrollAnimation";

interface USPPoint {
  title: string;
  description: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  headline?: string;
  primaryCta?: string;
  secondaryCta?: string;
  bgColor?: "white" | "gray" | "black" | "mint";
  titleStyle?: "normal" | "italic-suffix";
  showLogo?: boolean;
  logoText?: string;
  imageSrc?: string;
  imageAlt?: string;
  uspPoints?: USPPoint[];
}

export default function HeroSection({
  title,
  subtitle,
  headline,
  primaryCta = "Learn more",
  secondaryCta,
  bgColor = "white",
  titleStyle = "normal",
  showLogo = false,
  logoText,
  imageSrc,
  imageAlt,
  uspPoints,
}: HeroSectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-[#F5F5F7]",
    black: "bg-black",
    mint: "bg-gradient-to-b from-[#E8F4FD] via-[#F0F8FF] to-white",
  };

  const textColorClass = bgColor === "black" ? "text-white" : "text-[#1D1D1F]";
  const subtitleColorClass = bgColor === "black" ? "text-white/70" : "text-[#86868B]";

  const renderTitle = () => {
    if (titleStyle === "italic-suffix" && title.includes(" ")) {
      const parts = title.split(" ");
      const lastWord = parts.pop();
      const firstPart = parts.join(" ");
      return (
        <>
          {firstPart}{" "}
          <span className="italic font-light">{lastWord}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className={`${bgClasses[bgColor]} py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden`}>
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 text-center overflow-hidden">
        {/* Optional Logo */}
        {showLogo && logoText && (
          <ScrollAnimation delay={0}>
            <div className={`flex items-center justify-center gap-2 mb-1 ${textColorClass}`}>
              <svg className="w-8 h-8" viewBox="0 0 17 48" fill="currentColor">
                <path d="M15.5752 19.0792C15.4974 19.1373 13.9588 20.0141 13.9588 21.9462C13.9588 24.1982 15.9002 25.0166 15.9586 25.0361C15.9489 25.0943 15.6364 26.1851 14.8779 27.2954C14.2023 28.2793 13.4975 29.2632 12.4122 29.2632C11.3269 29.2632 11.0339 28.6264 9.77958 28.6264C8.55469 28.6264 8.12342 29.2827 7.1163 29.2827C6.10918 29.2827 5.42358 28.3668 4.64014 27.2565C3.72915 25.9497 3 23.9591 3 22.0659C3 19.0792 4.97099 17.4938 6.91254 17.4938C7.96854 17.4938 8.85009 18.1891 9.50625 18.1891C10.133 18.1891 11.1207 17.4549 12.3261 17.4549C12.7865 17.4549 14.3251 17.4938 15.5752 19.0792ZM11.4929 15.4649C11.9922 14.8671 12.3456 14.0487 12.3456 13.2303C12.3456 13.1137 12.3359 12.9971 12.3164 12.9C11.5037 12.9389 10.5258 13.4587 9.94795 14.1346C9.49724 14.6544 9.06597 15.4649 9.06597 16.2931C9.06597 16.4194 9.08541 16.5457 9.09513 16.5846C9.14373 16.5943 9.22177 16.6138 9.29981 16.6138C10.0346 16.6138 10.9647 16.1134 11.4929 15.4649Z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-[0.2em]">{logoText}</span>
            </div>
          </ScrollAnimation>
        )}

        {/* Title */}
        <ScrollAnimation delay={100}>
          <h1 className={`${textColorClass} text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-semibold tracking-tight mb-3 break-words`} style={{ letterSpacing: '-0.03em' }}>
            {renderTitle()}
          </h1>
        </ScrollAnimation>

        {/* Subtitle / Headline */}
        {subtitle && (
          <ScrollAnimation delay={200}>
            <h3 className={`${subtitleColorClass} text-base sm:text-lg md:text-2xl font-normal mb-1 max-w-2xl mx-auto px-2`}>
              {subtitle}
            </h3>
          </ScrollAnimation>
        )}
        {headline && (
          <ScrollAnimation delay={250}>
            <p className={`${subtitleColorClass} text-sm sm:text-base md:text-xl mb-5 px-2`}>
              {headline}
            </p>
          </ScrollAnimation>
        )}

        {/* USP Points - Apple Style */}
        {uspPoints && uspPoints.length > 0 && (
          <ScrollAnimation delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 sm:mb-10 mt-6">
              {uspPoints.map((usp, index) => (
                <div key={index} className={`text-left p-4 sm:p-5 rounded-2xl ${bgColor === "black" ? "bg-white/5" : "bg-[#F5F5F7]"}`}>
                  <h4 className={`${textColorClass} text-base sm:text-lg font-semibold mb-1`}>
                    {usp.title}
                  </h4>
                  <p className={`${subtitleColorClass} text-sm sm:text-[15px]`}>
                    {usp.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        )}

        {/* CTAs */}
        <ScrollAnimation delay={uspPoints ? 400 : 300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 mt-4">
            {primaryCta && (
              <button className="btn-apple-primary min-w-[120px] sm:min-w-[140px] text-sm sm:text-[17px] w-full sm:w-auto">
                {primaryCta}
              </button>
            )}
            {secondaryCta && (
              <button className={`${bgColor === "black" ? "btn-apple-white" : "btn-apple-secondary"} min-w-[120px] sm:min-w-[140px] text-sm sm:text-[17px] w-full sm:w-auto`}>
                {secondaryCta}
              </button>
            )}
          </div>
        </ScrollAnimation>

        {/* Image or Placeholder */}
        <ScrollAnimation delay={400}>
          <div className="relative mx-auto max-w-4xl px-0 sm:px-4">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={imageAlt || title}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            ) : (
              <div className={`aspect-[16/10] rounded-xl flex items-center justify-center border-2 border-dashed ${bgColor === "black" ? "border-white/20 bg-white/5" : "border-gray-200 bg-gray-50"}`}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${bgColor === "black" ? "bg-white/10" : "bg-gray-100"}`}>
                    <svg className={`w-8 h-8 ${bgColor === "black" ? "text-white/40" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className={`text-sm ${bgColor === "black" ? "text-white/40" : "text-gray-400"}`}>
                    [Bild-Platzhalter]
                  </span>
                </div>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
