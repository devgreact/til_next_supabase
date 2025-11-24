'use client';

import { Button } from '@/components/ui/button';
import { TriangleAlertIcon } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-[60vh] flex-col items-center justify-center gap-4 text-center'>
      <div className='bg-destructive/10 text-destructive rounded-full p-4'>
        <TriangleAlertIcon className='h-8 w-8' />
      </div>
      <h2 className='text-2xl font-bold'>오류가 발생했습니다!</h2>
      <p className='text-muted-foreground max-w-[400px]'>
        죄송합니다. 요청을 처리하는 중에 문제가 발생했습니다. 잠시 후 다시
        시도해주세요.
      </p>
      <div className='flex gap-2'>
        <Button onClick={() => reset()} variant='outline'>
          다시 시도
        </Button>
        <Button onClick={() => (window.location.href = '/')}>
          홈으로 이동
        </Button>
      </div>
    </div>
  );
}
