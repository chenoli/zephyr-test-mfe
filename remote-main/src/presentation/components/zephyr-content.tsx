import { Typography } from 'design-system';
import { useLanguage } from 'shared_store/Store';

function ZephyrContent() {
  const { t } = useLanguage();
  const { zephyr } = t;

  return (
    <div className="flex flex-col gap-8">
      <Typography as="h2" className="text-3xl font-bold text-gray-900 mb-2">
        {zephyr.title}
      </Typography>
      <div className="flex flex-col gap-5 text-gray-700 leading-relaxed">
        <Typography>{zephyr.intro}</Typography>
        <div className="flex flex-col gap-2">
          <Typography as="h3" className="text-lg font-semibold text-gray-800">
            {zephyr.understanding.title}
          </Typography>
          <Typography>{zephyr.understanding.text}</Typography>
        </div>
        <div className="flex flex-col gap-2">
          <Typography as="h3" className="text-lg font-semibold text-gray-800">
            {zephyr.feedback.title}
          </Typography>
          <Typography>{zephyr.feedback.text}</Typography>
        </div>
      </div>
    </div>
  );
}

export default ZephyrContent;