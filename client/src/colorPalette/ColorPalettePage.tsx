import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { shadcnColors } from '@/colorPalette/shadcnColors';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { palettes } from './palettes';
import { swatches } from './swatches';

const ColorPalettePage = () => {
  const [palette, setPalette] = useState('palette1');

  const paletteList = Object.keys(palettes);
  const currentPalette = palettes[palette];
  const image = currentPalette.image;
  const numOfPalette = currentPalette.numOfPalette;
  const numOfPalettes = Object.keys(palettes).length;
  const primary = currentPalette.primary;
  const neutrals = currentPalette.neutrals;
  const supporting = currentPalette.supporting;
  const textBtnColor: string = 'text-teal-500';

  const swatchesColors = Object.values(swatches);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="w-full p-4">
      <h1 className="text-center font-semibold text-2xl py-4">
        Color palette - shadcn/ui
      </h1>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {shadcnColors.map((singleColor) => {
          const { id, color } = singleColor;
          const copyColor = color.slice(3);
          const toastMessage = 'Copied to clipboard';
          return (
            <Button
              key={id}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:${color} ${textBtnColor} hover:${textBtnColor} ${color}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
      <div className="w-full h-[1px] mt-8 bg-slate-300"></div>
      <div className="w-full my-8 grid place-items-start">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="default">
              Choose Palette{' '}
              <span className="ml-2">
                (<span className="text-primary font-bold">{numOfPalette}</span>{' '}
                / <span className="font-normal">{numOfPalettes}</span>
              </span>
              )
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <ScrollArea className="h-48 w-48 rounded-md">
              {paletteList.map((singlePalette, index) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    className={`${
                      singlePalette === palette
                        ? 'bg-primary text-primary-foreground'
                        : ''
                    } cursor-pointer`}
                    onClick={() => setPalette(singlePalette)}
                  >
                    {singlePalette}
                  </DropdownMenuItem>
                );
              })}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h1 className="text-center text-4xl uppercase font-semibold">
        PALETTE {numOfPalette}
      </h1>
      <div className="w-full grid place-items-center">
        <div
          id="underline"
          className="w-[200px] rounded-sm h-1 mt-2 bg-slate-400"
        ></div>
      </div>
      <div className="w-full grid place-items-center mt-8">
        <img
          src={image}
          alt="pallete image"
          className="w-full max-w-[600px] border"
        />
      </div>
      <h1 className="text-2xl font-semibold py-4">Primary</h1>
      <p className="py-4">
        These are the splashes of color that should appear the most in your UI,
        and are the ones that determine the overall "look" of the site. Use
        these for things like primary actions, links, navigation items, icons,
        accent borders, or text you want to emphasize.
      </p>
      <div className="w-full grid place-items-center gap-2 break4:grid-cols-2 break5:grid-cols-4 break7:grid-cols-5 break9:grid-cols-6 break12:grid-cols-7 break14:grid-cols-8 2xl:grid-cols-9 break16:grid-cols-10 break17:grid-cols-12">
        {primary.map((singleColor, index) => {
          if (singleColor === 'break') {
            return (
              <div
                key={index}
                className="w-full h-[1px] rounded-sm bg-slate-200 my-1 break4:col-span-2 break5:col-span-4 break7:col-span-5 break9:col-span-6 break12:col-span-7 break14:col-span-8 2xl:col-span-9 break16:col-span-10 break17:col-span-12"
              ></div>
            );
          }
          const copyColor = singleColor.slice(3);
          const toastMessage = 'Copied to clipboard';
          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:${textBtnColor} ${textBtnColor} hover:${singleColor} ${singleColor}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
      <div className="w-full h-[1px] my-8 bg-slate-300"></div>
      <h1 className="text-2xl font-semibold py-4">Neutrals</h1>
      <p className="py-4">
        These are the colors you will use the most and will make up the majority
        of your UI. Use them for most of your text, backgrounds, and borders, as
        well as for things like secondary buttons and links.
      </p>
      <div className="w-full grid place-items-center gap-2 break4:grid-cols-2 break5:grid-cols-4 break7:grid-cols-5 break9:grid-cols-6 break12:grid-cols-7 break14:grid-cols-8 2xl:grid-cols-9 break16:grid-cols-10 break17:grid-cols-12">
        {neutrals.map((singleColor, index) => {
          if (singleColor === 'break') {
            return (
              <div
                key={index}
                className="w-full h-[1px] rounded-sm bg-slate-200 my-1 break4:col-span-2 break5:col-span-4 break7:col-span-5 break9:col-span-6 break12:col-span-7 break14:col-span-8 2xl:col-span-9 break16:col-span-10 break17:col-span-12"
              ></div>
            );
          }
          const copyColor = singleColor.slice(3);
          const toastMessage = 'Copied to clipboard';
          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:${textBtnColor} ${textBtnColor} hover:${singleColor} ${singleColor}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
      <div className="w-full h-[1px] my-8 bg-slate-300"></div>
      <h1 className="text-2xl font-semibold py-4">Supporting</h1>
      <p className="py-4">
        These colors should be used fairly conservatively throughout your UI to
        avoid overpowering your primary colors. Use them when you need an
        element to stand out, or to reinforce things like error states or
        positive trends with the appropriate semantic color.
      </p>
      <div className="w-full grid place-items-center gap-2 break4:grid-cols-2 break5:grid-cols-4 break7:grid-cols-5 break9:grid-cols-6 break12:grid-cols-7 break14:grid-cols-8 2xl:grid-cols-9 break16:grid-cols-10 break17:grid-cols-12">
        {supporting.map((singleColor, index) => {
          if (singleColor === 'break') {
            return (
              <div
                key={index}
                className="w-full h-[1px] rounded-sm bg-slate-200 my-1 break4:col-span-2 break5:col-span-4 break7:col-span-5 break9:col-span-6 break12:col-span-7 break14:col-span-8 2xl:col-span-9 break16:col-span-10 break17:col-span-12"
              ></div>
            );
          }
          const copyColor = singleColor.slice(3);
          const toastMessage = 'Copied to clipboard';
          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:${textBtnColor} ${textBtnColor} hover:${singleColor} ${singleColor}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
      <div className="w-full h-[1px] my-8 bg-slate-300"></div>
      {/* Swatches */}
      <h1 className="text-2xl font-semibold py-4">Swatches</h1>
      <p className="py-4">
        This is a collection of all the color samples we used in the palettes.
      </p>
      <div className="w-full grid place-items-center gap-2 break4:grid-cols-2 break5:grid-cols-4 break7:grid-cols-5 break9:grid-cols-6 break12:grid-cols-7 break14:grid-cols-8 2xl:grid-cols-9 break16:grid-cols-10 break17:grid-cols-12">
        {swatchesColors.map((singleColor, index) => {
          if (singleColor === 'break') {
            return (
              <div
                key={index}
                className="w-full h-[1px] rounded-sm bg-slate-200 my-1 break4:col-span-2 break5:col-span-4 break7:col-span-5 break9:col-span-6 break12:col-span-7 break14:col-span-8 2xl:col-span-9 break16:col-span-10 break17:col-span-12"
              ></div>
            );
          }
          const copyColor = singleColor.slice(3);
          const toastMessage = 'Copied to clipboard';
          return (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:${textBtnColor} ${textBtnColor} hover:${singleColor} ${singleColor}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
    </section>
  );
};
export default ColorPalettePage;
