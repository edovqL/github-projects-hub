import MarkdownPreview from '@uiw/react-markdown-preview';

import Modal from '@/components/Modal';
import { isEmpty } from '@/helpers/validation';
import useQueryParams from '@/hooks/useQueryParams';

import { useReadmeByUsernameAndRepoQuery } from '../../hooks';
import { PreviewProps } from './types';

const Preview = ({ open, onClose }: PreviewProps) => {
    const { getQueryParams } = useQueryParams();

    const params = getQueryParams();

    const { data: readmeData, isLoading: isLoadingReadme } = useReadmeByUsernameAndRepoQuery(
        { username: params?.username, repo: params?.repo },
        !isEmpty(params) && open
    );

    const source = `${readmeData?.download_content}`;

    if (isEmpty(readmeData?.download_content)) return null;

    return (
        <>
            {open && (
                <Modal onClose={onClose}>
                    {isLoadingReadme ? (
                        <span className="text-center text-white">Loading...</span>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold text-[18px] break-words">{readmeData?.name}</span>
                            <MarkdownPreview source={source} />
                        </div>
                    )}
                </Modal>
            )}
        </>
    );
};

export default Preview;
