import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

interface StoryCardProps {
  title: string;
  description: string;
  image?: string;
  quote?: string;
  author?: string;
  delay?: number;
  reverse?: boolean;
}

export function StoryCard({
  title,
  description,
  image,
  quote,
  author,
  delay = 0,
  reverse = false,
}: StoryCardProps) {
  return (
    <ScrollReveal delay={delay} direction={reverse ? "right" : "left"}>
      <div
        className={`flex flex-col gap-8 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
      >
        {image && (
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg border border-border/60 shadow-md">
              <img
                src={image}
                alt={title}
                className="h-auto w-full transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        )}
        <div className={`lg:w-1/2 ${image ? "" : "w-full"}`}>
          <Card className="border border-border/60 shadow-sm">
            <CardContent className="pt-6">
              <h3 className="c2r-card-title mb-4">{title}</h3>
              <p className="mb-6 c2r-prose">{description}</p>
              {quote && (
                <blockquote className="border-l-2 border-c2r-primary pl-4 italic text-muted-foreground">
                  <p className="mb-2">&ldquo;{quote}&rdquo;</p>
                  {author && (
                    <footer className="text-sm font-semibold">
                      — {author}
                    </footer>
                  )}
                </blockquote>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollReveal>
  );
}
