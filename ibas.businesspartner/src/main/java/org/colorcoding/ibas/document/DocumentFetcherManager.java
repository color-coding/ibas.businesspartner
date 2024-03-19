package org.colorcoding.ibas.document;

import java.util.HashMap;
import java.util.Map;

import org.colorcoding.ibas.bobas.core.BOFactory;
import org.colorcoding.ibas.bobas.i18n.I18N;
import org.colorcoding.ibas.bobas.mapping.BusinessObjectUnit;
import org.colorcoding.ibas.initialfantasy.MyConfiguration;

/**
 * 单据检索管理员
 * 
 * @author Niuren.Zhu
 *
 */
public class DocumentFetcherManager {

	private static DocumentFetcherManager instance;

	public static DocumentFetcherManager create() {
		if (instance == null) {
			synchronized (DocumentFetcherManager.class) {
				if (instance == null) {
					instance = new DocumentFetcherManager();
					instance.init();
				}
			}
		}
		return instance;
	}

	@SuppressWarnings("unchecked")
	protected synchronized void init() {
		String name = this.getClass().getName();
		int index = name.lastIndexOf(".");
		if (index > 0) {
			name = name.substring(0, index);
		}
		Class<?>[] packClass = BOFactory.create().loadClasses(name);
		for (Class<?> item : packClass) {
			BusinessObjectUnit annotation = item.getAnnotation(BusinessObjectUnit.class);
			if (annotation != null) {
				if (IDocumentFetcher.class.isAssignableFrom(item)) {
					this.getFetcherMap().put(MyConfiguration.applyVariables(annotation.code()),
							(Class<? extends IDocumentFetcher<?>>) item);
				}
			}
		}
	}

	private Map<String, Class<? extends IDocumentFetcher<?>>> fetcherMap;

	public final Map<String, Class<? extends IDocumentFetcher<?>>> getFetcherMap() {
		if (this.fetcherMap == null) {
			this.fetcherMap = new HashMap<String, Class<? extends IDocumentFetcher<?>>>();
		}
		return fetcherMap;
	}

	@SuppressWarnings("unchecked")
	public <T extends IDocumentOperatingTarget> IDocumentFetcher<T> newFetcher(String documentType) throws Exception {
		Class<? extends IDocumentFetcher<?>> clazz = this.getFetcherMap().get(documentType);
		if (clazz == null) {
			throw new Exception(I18N.prop("msg_bp_no_fetch_method_defined", documentType));
		}
		return (IDocumentFetcher<T>) clazz.newInstance();
	}
}
