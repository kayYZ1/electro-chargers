"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const voivodeships = [
    { value: "dolnoslaskie", label: "Dolnośląskie" },
    { value: "kujawsko-pomorskie", label: "Kujawsko-Pomorskie" },
    { value: "lubelskie", label: "Lubelskie" },
    { value: "lubuskie", label: "Lubuskie" },
    { value: "lodzkie", label: "Łódzkie" },
    { value: "malopolskie", label: "Małopolskie" },
    { value: "mazowieckie", label: "Mazowieckie" },
    { value: "opolskie", label: "Opolskie" },
    { value: "podkarpackie", label: "Podkarpackie" },
    { value: "podlaskie", label: "Podlaskie" },
    { value: "pomorskie", label: "Pomorskie" },
    { value: "slaskie", label: "Śląskie" },
    { value: "swietokrzyskie", label: "Świętokrzyskie" },
    { value: "warminsko-mazurskie", label: "Warmińsko-Mazurskie" },
    { value: "wielkopolskie", label: "Wielkopolskie" },
    { value: "zachodniopomorskie", label: "Zachodniopomorskie" },
];

export function VoivodeshipsList() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? voivodeships.find((voivodeship) => voivodeship.value === value)?.label
                        : "Select voivodeship..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 z-[1000]">
                <Command>
                    <CommandInput placeholder="Search voivodeship..." />
                    <CommandList>
                        <CommandEmpty>No voivodeship found.</CommandEmpty>
                        <CommandGroup>
                            {voivodeships.map((voivodeship) => (
                                <CommandItem
                                    key={voivodeship.value}
                                    value={voivodeship.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === voivodeship.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {voivodeship.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
