import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import questions from "@/assets/ms2-product-questions.jpg.asset.json";
import passport from "@/assets/ms2-product-passport.jpg.asset.json";
import assistant from "@/assets/ms2-product-assistant.jpg.asset.json";

const screens = {
  questions: { url: questions.url, title: "Точка росту · питання про ваш продукт" },
  passport: { url: passport.url, title: "Паспорт бренду · готовий документ і файли" },
  assistant: { url: assistant.url, title: "Асистент · від завдання до сценарію" },
};

export function ProductPreview({ screen, compact = false }: { screen: keyof typeof screens; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const image = screens[screen];
  return <figure className="min-w-0">
    <Button variant="ghost" className={`ms2-product-preview ${compact ? "ms2-product-preview-compact" : ""}`} onClick={() => setOpen(true)} aria-label={`Розгорнути: ${image.title}`}>
      <img src={image.url} alt={image.title} loading="lazy" />
      <span className="ms2-preview-zoom"><Maximize2 className="size-4" /></span>
    </Button>
    <figcaption className="mt-4 text-xs text-smoke">{image.title}</figcaption>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="ms2-page max-h-[90dvh] max-w-5xl overflow-y-auto bg-paper p-5 sm:p-8"><DialogTitle className="ms2-serif pr-8 text-xl">{image.title}</DialogTitle><img src={image.url} alt={image.title} className="mt-3 h-auto w-full" /></DialogContent></Dialog>
  </figure>;
}