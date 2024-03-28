import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { shadcnColors } from '@/colorPallete/colors';

const ColorPalettePage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const textBtnColor: string = 'text-teal-500';

  return (
    <section className="w-full p-4">
      <h1 className="text-center text-2xl py-4">Color palette shadcn/ui</h1>
      <div className="w-full grid place-items-center break5:grid-cols-2 break9:grid-cols-3 2xl:grid-cols-4 gap-1">
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
    </section>
  );
};
export default ColorPalettePage;
