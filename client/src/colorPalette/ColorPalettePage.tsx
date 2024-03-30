import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { shadcnColors } from '@/colorPalette/shadcnColors';
import {
  numOfPalette,
  primary,
  neutrals,
  supporting,
  image,
} from './palette16';

const ColorPalettePage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const textBtnColor: string = 'text-teal-500';

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
      <Separator className="my-8" />
      <h1 className="text-center text-4xl uppercase font-semibold">
        {numOfPalette}
      </h1>
      <div className="w-full grid place-items-center">
        <div
          id="underline"
          className="w-[200px] rounded-sm h-1 mt-2 bg-slate-400"
        ></div>
      </div>
      <div className="w-full grid place-items-center mt-8">
        <img src={image} alt="pallete image" className="w-[600px]" />
      </div>
      <h1 className="text-2xl font-semibold py-4">Primary</h1>
      <p className="py-4">
        These are the splashes of color that should appear the most in your UI,
        and are the ones that determine the overall "look" of the site. Use
        these for things like primary actions, links, navigation items, icons,
        accent borders, or text you want to emphasize.
      </p>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {primary.map((singleColor, index) => {
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
      <Separator className="my-8" />
      <h1 className="text-2xl font-semibold py-4">Neutrals</h1>
      <p className="py-4">
        These are the colors you will use the most and will make up the majority
        of your UI. Use them for most of your text, backgrounds, and borders, as
        well as for things like secondary buttons and links.
      </p>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {neutrals.map((singleColor, index) => {
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
      <Separator className="my-8" />
      <h1 className="text-2xl font-semibold py-4">Supporting</h1>
      <p className="py-4">
        These colors should be used fairly conservatively throughout your UI to
        avoid overpowering your primary colors. Use them when you need an
        element to stand out, or to reinforce things like error states or
        positive trends with the appropriate semantic color.
      </p>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {supporting.map((singleColor, index) => {
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
