import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { shadcnColors } from '@/colorPallete/shadcnColors';
// import { numOfPallete, primary, neutrals, supporting, image } from './pallete1';
import { numOfPallete, primary, neutrals, supporting, image } from './pallete2';

const ColorPalettePage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const textBtnColor: string = 'text-teal-500';

  return (
    <section className="w-full p-4">
      <h1 className="text-center text-2xl py-4">Color palette - shadcn/ui</h1>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {shadcnColors.map((singleColor) => {
          const { id, color } = singleColor;
          const toastMessage = color + ' ' + 'COPIED';
          const backgroundColor = 'bg-' + color;
          return (
            <Button
              key={id}
              variant="outline"
              onClick={() => {
                copyToClipboard(color);
                toast({ description: toastMessage });
              }}
              className={`w-full border ${textBtnColor} ${backgroundColor}`}
            >
              {color}
            </Button>
          );
        })}
      </div>
      <Separator className="my-8" />
      <h1 className="text-center text-2xl">
        Custom Color <span className="uppercase">{numOfPallete}</span>
      </h1>
      <div className="w-full grid place-items-center mt-4">
        <img src={image} alt="pallete image" className="w-[600px]" />
      </div>
      <h1 className="text-xl py-4">Primary</h1>
      <p className="py-4">
        These are the splashes of color that should appear the most in your UI,
        and are the ones that determine the overall "look" of the site. Use
        these for things like primary actions, links, navigation items, icons,
        accent borders, or text you want to emphasize.
      </p>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {primary.map((singleColor) => {
          const { name, value } = singleColor;
          const toastMessage = name + ' ' + 'COPIED';
          const copyColor = value.slice(3);
          return (
            <Button
              key={name}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border ${textBtnColor} ${value}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
      <Separator className="my-8" />
      <h1 className="text-xl py-4">Neutrals</h1>
      <p className="py-4">
        These are the colors you will use the most and will make up the majority
        of your UI. Use them for most of your text, backgrounds, and borders, as
        well as for things like secondary buttons and links.
      </p>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {neutrals.map((singleColor) => {
          const { name, value } = singleColor;
          const toastMessage = name + ' ' + 'COPIED';
          const copyColor = value.slice(3);
          return (
            <Button
              key={name}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border ${textBtnColor} ${value}`}
            >
              {copyColor}
            </Button>
          );
        })}
      </div>
      <Separator className="my-8" />
      <h1 className="text-xl py-4">Supporting</h1>
      <p className="py-4">
        These colors should be used fairly conservatively throughout your UI to
        avoid overpowering your primary colors. Use them when you need an
        element to stand out, or to reinforce things like error states or
        positive trends with the appropriate semantic color.
      </p>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 break16:grid-cols-5 gap-2">
        {supporting.map((singleColor) => {
          const { name, value } = singleColor;
          const toastMessage = name + ' ' + 'COPIED';
          const copyColor = value.slice(3);
          return (
            <Button
              key={name}
              variant="outline"
              onClick={() => {
                copyToClipboard(copyColor);
                toast({ description: toastMessage });
              }}
              className={`w-full border ${textBtnColor} ${value}`}
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
