import { useMemo, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  SPOKEN_LANGUAGES,
  parseLanguages,
  serializeLanguages,
} from "@/data/languages";

export type LanguageSelectProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

export function LanguageSelect({
  id,
  value,
  onChange,
  required = false,
  disabled = false,
  className,
  placeholder = "Select languages you speak",
}: LanguageSelectProps) {
  const [open, setOpen] = useState(false);
  const selected = useMemo(() => parseLanguages(value), [value]);

  const toggleLanguage = (language: string) => {
    const next = selected.includes(language)
      ? selected.filter((item) => item !== language)
      : [...selected, language];
    onChange(serializeLanguages(next));
  };

  const removeLanguage = (language: string) => {
    onChange(serializeLanguages(selected.filter((item) => item !== language)));
  };

  const triggerLabel =
    selected.length === 0
      ? placeholder
      : selected.length === 1
        ? selected[0]
        : `${selected.length} languages selected`;

  return (
    <div className={cn("space-y-2", className)}>
      {required && (
        <input
          tabIndex={-1}
          aria-hidden
          className="sr-only"
          required
          value={value}
          readOnly
          onChange={() => undefined}
        />
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "h-10 w-full justify-between font-normal",
              selected.length === 0 && "text-muted-foreground",
            )}
          >
            <span className="truncate">{triggerLabel}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search languages..." />
            <CommandList className="max-h-64">
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {SPOKEN_LANGUAGES.map((language) => {
                  const isSelected = selected.includes(language);
                  return (
                    <CommandItem
                      key={language}
                      value={language}
                      onSelect={() => toggleLanguage(language)}
                      className="cursor-pointer"
                    >
                      <span
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {language}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {selected.map((language) => (
            <Badge
              key={language}
              variant="secondary"
              className="gap-1 pr-1 font-normal"
            >
              {language}
              <button
                type="button"
                className="rounded-full p-0.5 hover:bg-muted-foreground/20"
                aria-label={`Remove ${language}`}
                onClick={() => removeLanguage(language)}
                disabled={disabled}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
