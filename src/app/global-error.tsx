'use client';

import { Button } from '@/components/ui/button';
import { TriangleAlertIcon } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className='flex h-screen flex-col items-center justify-center gap-4 text-center'>
          <div className='bg-destructive/10 text-destructive rounded-full p-4'>
            <TriangleAlertIcon className='h-10 w-10' />
          </div>
          <h2 className='text-2xl font-bold'>치명적인 오류가 발생했습니다</h2>
          <p className='text-muted-foreground max-w-[400px]'>
            애플리케이션을 불러오는 중에 문제가 발생했습니다.
          </p>
          <Button onClick={() => reset()}>다시 시도</Button>
        </div>
      </body>
    </html>
  );
}
